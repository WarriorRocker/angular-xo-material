export const environment = {
	production: false
};

const appConfig = {
	app: {
		title: 'Xo for Angular',
		url: 'http://angularxo.local',
		version: '0.1.2',
		debug: true
	},
	paths: {
		apiUrl: 'http://angularxo.local/xo-api/',
		templateUrl: 'http://angularxo.local/wp-content/themes/angular-xo-material/'
	}
};

window['appConfig'] = appConfig;
