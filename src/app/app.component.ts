import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { tap, filter } from 'rxjs/operators';

import { XoPostService } from 'angular-xo';

declare var gtag: any;

@Component({
	selector: 'xo-material-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class XoMaterialAppComponent implements OnInit {
	uaTrackingId: string = 'UA-125273296-1';

	constructor(private _router: Router, private _title: Title,
		private _post: XoPostService) {
		this._post.post$
			.subscribe((post) => {
				if (post)
					this.gTagPageView();
			});
	}

	ngOnInit() {
		this.printWelcome();
	}

	private printWelcome(): void {
		var welcome = [
			'%c' +
			'XXXXXXX           XXXXXXX',
			' X:::::X         X:::::X',
			'  X:::::X       X:::::X',
			'   X:::::X     X:::::X',
			'    X:::::X   X:::::X',
			'     X:::::X X:::::X         ooooooooooo',
			'      X:::::X:::::X        oo:::::::::::oo',
			'       X:::::::::X        o:::::::::::::::o',
			'       X:::::::::X        o:::::ooooo:::::o',
			'      X:::::X:::::X       o::::o     o::::o',
			'     X:::::X X:::::X      o::::o     o::::o',
			'    X:::::X   X:::::X     o::::o     o::::o',
			'   X:::::X     X:::::X    o:::::ooooo:::::o',
			'  X:::::X       X:::::X   o:::::::::::::::o',
			' X:::::X         X:::::X   oo:::::::::::oo',
			'XXXXXXX           XXXXXXX    ooooooooooo'
		];

		console.log(welcome.join("\n"), 'font-weight: bold; color: #0d5aa1');
	}

	gTagPageView() {
		try {
			const params = {
				page_path: this._router.url,
				page_title: this._title.getTitle()
			};

			gtag('config', this.uaTrackingId, params);
		} catch (err) {
		}
	}
}
