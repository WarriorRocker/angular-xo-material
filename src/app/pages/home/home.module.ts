/**
 * @XoPageTemplate Home
 * @XoLoadChildren XoMaterialHomePageModule
 * @XoAcfGroups xo_content, xo_header
 * @XoDisableEditor True
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostResolver } from 'angular-xo';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { XoMaterialHomePageComponent } from './home.component';
import { XoMaterialSectionsModule } from '../../components/sections/sections.module';
import { XoMaterialFooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    XoMaterialSectionsModule,
    XoMaterialFooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: XoMaterialHomePageComponent,
        resolve: {
          post: PostResolver
        }
      }
    ])
  ],
  declarations: [XoMaterialHomePageComponent]
})
export class XoMaterialHomePageModule { }
