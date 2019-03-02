/**
 * @XoPageTemplate Home
 * @XoLoadChildren XoMaterialHomePageModule
 * @XoAcfGroups xo_content, xo_header
 * @XoDisableEditor True
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoPostResolver } from 'angular-xo';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { XoMaterialHomePageComponent } from './home.component';
import { XoMaterialSectionsModule } from '../../components/sections/sections.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    XoMaterialSectionsModule,
    RouterModule.forChild([
      {
        path: '',
        component: XoMaterialHomePageComponent,
        resolve: {
          post: XoPostResolver
        }
      }
    ])
  ],
  declarations: [XoMaterialHomePageComponent]
})
export class XoMaterialHomePageModule { }
