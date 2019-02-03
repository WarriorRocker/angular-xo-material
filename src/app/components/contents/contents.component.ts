// Modified from: https://github.com/angular/material.angular.io/blob/master/src/app/shared/table-of-contents/table-of-contents.ts

import { Component, Input, Inject, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

interface Link {
  /* id of the section*/
  id: string;

  /* header type h3/h4 */
  type: string;

  /* If the anchor is in view of the page */
  active: boolean;

  /* name of the anchor */
  name: string;

  /* top offset px of the anchor */
  top: number;
}

@Component({
  selector: 'xo-material-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class XoMaterialContentsComponent implements OnInit {
  @Input() links: Link[] = [];
  @Input() container: string;
  @Input() headerSelectors = 'h2[xo-material-sections-heading-link], h3[xo-material-sections-heading-link], h4[xo-material-sections-heading-link]';

  _rootUrl = this._router.url.split('#')[0];
  private _scrollContainer: any;
  private _destroyed = new Subject();
  private _urlFragment = '';

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _element: ElementRef,
    @Inject(DOCUMENT) private _document: Document) {
    this._route.fragment
      .pipe(takeUntil(this._destroyed))
      .subscribe((fragment) => {
        this._urlFragment = fragment;
        this.updateScrollPosition();
      });
  }

  ngOnInit(): void {
    Promise.resolve().then(() => {
      this._scrollContainer = this.container ?
        this._document.querySelectorAll(this.container)[0] : window;

      if (this._scrollContainer) {
        fromEvent(this._scrollContainer, 'scroll').pipe(
          takeUntil(this._destroyed),
          debounceTime(10))
          .subscribe(() => this.onScroll());
      }
    });
  }

  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.createLinks();
      this.updateScrollPosition();
    });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }

  private createLinks(): void {
    const links = [];
    const headers =
      Array.from(this._document.querySelectorAll(this.headerSelectors)) as HTMLElement[];

    if (headers.length) {
      for (const header of headers) {
        // remove the 'link' icon name from the inner text
        const name = header.innerText.trim().replace(/^link/, '');
        const { top } = header.getBoundingClientRect();
        links.push({
          name,
          type: header.tagName.toLowerCase(),
          top: top,
          id: header.id,
          active: false
        });
      }
    }

    this.links = links;
  }

  updateScrollPosition(): void {
    const target = document.getElementById(this._urlFragment);
    if (target) {
      target.scrollIntoView();
    }
  }

  /** Gets the scroll offset of the scroll container */
  private getScrollOffset(): number {
    const { top } = this._element.nativeElement.getBoundingClientRect();
    if (typeof this._scrollContainer.scrollTop !== 'undefined') {
      return this._scrollContainer.scrollTop + top;
    } else if (typeof this._scrollContainer.pageYOffset !== 'undefined') {
      return this._scrollContainer.pageYOffset + top;
    }
  }

  private onScroll(): void {
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].active = this.isLinkActive(this.links[i], this.links[i + 1]);
    }
  }

  private isLinkActive(currentLink: any, nextLink: any): boolean {
    // A link is considered active if the page is scrolled passed the anchor without also
    // being scrolled passed the next link
    const scrollOffset = this.getScrollOffset();
    return scrollOffset >= currentLink.top && !(nextLink && nextLink.top < scrollOffset);
  }
}
