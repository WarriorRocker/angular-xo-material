import { Component, Input } from '@angular/core';

import { XoRoutes } from 'angular-xo';

@Component({
	selector: 'xo-material-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss']
})
export class XoMaterialBreadcrumbsComponent {
	@Input() breadcrumbs: Array<XoRoutes.SitemapEntry>;
}
