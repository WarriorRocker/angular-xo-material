import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoMaterialFooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [XoMaterialFooterComponent],
  exports: [XoMaterialFooterComponent]
})
export class XoMaterialFooterModule { }
