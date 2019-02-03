import { Component, Input } from '@angular/core';

@Component({
  selector: 'xo-material-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class XoMaterialBreadcrumbsComponent {
  @Input() breadcrumbs: any;
}
