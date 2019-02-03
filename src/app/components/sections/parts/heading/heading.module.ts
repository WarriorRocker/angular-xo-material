import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { XoMaterialHeadingSectionComponent } from './heading.component';
import { XoMaterialHeadingSectionLinkComponent } from './parts/headingLink.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  declarations: [
    XoMaterialHeadingSectionComponent,
    XoMaterialHeadingSectionLinkComponent
  ],
  exports: [XoMaterialHeadingSectionComponent]
})
export class XoMaterialHeadingSectionModule { }
