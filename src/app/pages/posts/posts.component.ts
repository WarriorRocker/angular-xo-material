import { Component, OnInit } from '@angular/core';

import { XoApiOptionsService } from 'angular-xo';

@Component({
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class XoMaterialPostsPageComponent implements OnInit {
	sidebar: any = {};

	constructor(private _options: XoApiOptionsService) { }

	ngOnInit() {
	}

	getSidebar() {
		this._options.get('xo_projects_sidebar')
			.subscribe((response) => {
				if (response.success)
					this.sidebar = response.fields;
			});
	}
}
