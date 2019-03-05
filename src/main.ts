import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/php/php';
import 'codemirror/mode/shell/shell';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//window['hljs'] = hljs;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
