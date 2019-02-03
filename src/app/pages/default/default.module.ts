/**
 * @XoPageTemplate Default
 * @XoDefaultTemplate True
 * @XoLoadChildren XoMaterialDefaultPageModule
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostResolver } from 'angular-xo';

import { XoMaterialDefaultPageComponent } from './default.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { XoMaterialFooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    XoMaterialBreadcrumbsModule,
    XoMaterialFooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: XoMaterialDefaultPageComponent,
        resolve: {
          post: PostResolver
        }
      }
    ])
  ],
  declarations: [XoMaterialDefaultPageComponent]
})
export class XoMaterialDefaultPageModule { }
