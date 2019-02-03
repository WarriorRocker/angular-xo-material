import { Component, OnInit, Inject, Input } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'xo-material-back-to-top',
  templateUrl: './backToTop.component.html',
  styleUrls: ['./backToTop.component.scss']
})
export class XoMaterialBackToTopComponent implements OnInit {
  @Input() container: string;
  @Input() offset: number = 200;

  showButton: boolean = false;

  private _scrollContainer: any;
  private _destroyed = new Subject();

  constructor(@Inject(DOCUMENT) private _document: Document) { }

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

  ngOnDestroy(): void {
    this._destroyed.next();
  }

  private onScroll() {
    this.showButton = (this._scrollContainer.scrollTop > this.offset);

  }
}
