import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

//import hljs from 'highlight.js';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//window['hljs'] = hljs;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
