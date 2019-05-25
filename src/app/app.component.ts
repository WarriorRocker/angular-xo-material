import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

declare var gtag: any;

@Component({
	selector: 'xo-material-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class XoMaterialAppComponent implements OnInit {
	uaTrackingId: string = 'UA-125273296-1';

	constructor(private _router: Router, private _location: Location, private _title: Title) {
		this._router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe((event: NavigationEnd) => {
			setTimeout(() => this.gTagPageView(), 0);
		});

		this._router.events.pipe(
			filter(event => event instanceof NavigationError)
		).subscribe((event: NavigationError) => {
			this._router.navigate(['/404'], { skipLocationChange: true })
				.then(() => this._location.go(event.url));
		});
	}

	ngOnInit() {
		this.printWelcome();
	}

	private printWelcome(): void {
		const welcome = [
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

		console.log(welcome.join('\n'), 'font-weight: bold; color: #0d5aa1');
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
