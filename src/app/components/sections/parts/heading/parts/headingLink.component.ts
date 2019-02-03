import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[xo-material-sections-heading-link]',
  templateUrl: './headingLink.component.html',
  styleUrls: ['./headingLink.component.scss']
})
export class XoMaterialHeadingSectionLinkComponent {
  href: string = this._router.url.split(/[?#]/)[0];

  @Input() section: any;

  constructor(private _router: Router) { }
}
