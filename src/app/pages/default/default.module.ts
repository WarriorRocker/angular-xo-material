/**
 * @XoPageTemplate Default
 * @XoDefaultTemplate True
 * @XoLoadChildren XoMaterialDefaultPageModule
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XoPostResolver } from 'angular-xo';

import { XoMaterialDefaultPageComponent } from './default.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    XoMaterialBreadcrumbsModule,
    RouterModule.forChild([
      {
        path: '',
        component: XoMaterialDefaultPageComponent,
        resolve: {
          post: XoPostResolver
        }
      }
    ])
  ],
  declarations: [XoMaterialDefaultPageComponent]
})
export class XoMaterialDefaultPageModule { }
