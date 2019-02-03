import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AngularXoModule, RouteService, InitRoutes } from 'angular-xo';

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
    AngularXoModule,
    RouterModule.forRoot(XoMaterialAppLazyRoutes),
    XoMaterialHeaderModule
  ],
  providers: [
    {
      'provide': APP_INITIALIZER,
      'useFactory': InitRoutes,
      'deps': [RouteService],
      'multi': true
    }
  ],
  bootstrap: [XoMaterialAppComponent]
})
export class AppModule { }
