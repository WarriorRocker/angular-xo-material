/**
 * @XoPageTemplate Content
 * @XoLoadChildren XoMaterialContentPageModule
 * @XoAcfGroups xo_content
 * @XoDisableEditor True
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostResolver } from 'angular-xo';

import { XoMaterialContentPageComponent } from './content.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { XoMaterialSectionsModule } from '../../components/sections/sections.module';
import { XoMaterialFooterModule } from '../../components/footer/footer.module';
import { XoMaterialContentsModule } from '../../components/contents/contents.module';
import { XoMaterialBackToTopModule } from '../../components/backToTop/backToTop.module';

@NgModule({
  imports: [
    CommonModule,
    XoMaterialBreadcrumbsModule,
    XoMaterialSectionsModule,
    XoMaterialContentsModule,
    XoMaterialFooterModule,
    XoMaterialBackToTopModule,
    RouterModule.forChild([
      {
        path: '',
        component: XoMaterialContentPageComponent,
        resolve: {
          post: PostResolver
        }
      }
    ])
  ],
  declarations: [XoMaterialContentPageComponent]
})
export class XoMaterialContentPageModule { }
