import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { XoModule, XoRouteService, XoInitRoutes } from 'angular-xo';

import { AppRoutingModule } from './app.routing';
import { XoMaterialAppComponent } from './app.component';
import { XoMaterialHeaderModule } from './components/header/header.module';
import { XoMaterialFooterModule } from './components/footer/footer.module';

@NgModule({
	declarations: [ XoMaterialAppComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		XoModule,
		XoMaterialHeaderModule,
		XoMaterialFooterModule
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: XoInitRoutes,
			deps: [ XoRouteService ],
			multi: true
		}
	],
	bootstrap: [ XoMaterialAppComponent ]
})
export class AppModule {}
