import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule, MatButtonModule } from '@angular/material';

import { XoMaterialBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [XoMaterialBreadcrumbsComponent],
  exports: [XoMaterialBreadcrumbsComponent]
})
export class XoMaterialBreadcrumbsModule { }
