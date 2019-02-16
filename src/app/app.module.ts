import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { XoModule, XoRouteService, XoInitRoutes } from 'angular-xo';

import { XoMaterialAppLazyRoutes } from './app.routing';
import { XoMaterialAppComponent } from './app.component';
import { XoMaterialHeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    XoMaterialAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    XoModule,
    RouterModule.forRoot(XoMaterialAppLazyRoutes),
    XoMaterialHeaderModule
  ],
  providers: [
    {
      'provide': APP_INITIALIZER,
      'useFactory': XoInitRoutes,
      'deps': [XoRouteService],
      'multi': true
    }
  ],
  bootstrap: [XoMaterialAppComponent]
})
export class AppModule { }
