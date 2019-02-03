import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XoMaterialContentsComponent } from './contents.component';

@NgModule({
  imports: [CommonModule],
  declarations: [XoMaterialContentsComponent],
  exports: [XoMaterialContentsComponent]
})
export class XoMaterialContentsModule { }
