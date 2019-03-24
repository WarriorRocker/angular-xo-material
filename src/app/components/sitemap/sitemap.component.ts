import { Component, OnInit } from '@angular/core';

import { XoRoutes, XoApiRoutesService } from 'angular-xo';

@Component({
	selector: 'xo-material-sitemap',
	templateUrl: './sitemap.component.html',
	styleUrls: ['./sitemap.component.scss']
})
export class XoMaterialSitemapComponent implements OnInit {
	entries: Array<XoRoutes.SitemapEntry> = [];

	constructor(private _routes: XoApiRoutesService) { }

	ngOnInit() {
		this.getSitemap();
	}

	getSitemap() {
		this._routes.sitemap()
			.subscribe((response) => {
				if (response.success)
					this.entries = response.entries;
			});
	}
}
