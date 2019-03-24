import { Component, Input } from '@angular/core';

import { XoRoutes } from 'angular-xo';

@Component({
	selector: 'xo-material-sitemap-entries',
	templateUrl: './entries.component.html',
	styleUrls: ['./entries.component.scss']
})
export class XoMaterialSitemapEntriesComponent {
	@Input() entries: Array<XoRoutes.SitemapEntry>;
}
