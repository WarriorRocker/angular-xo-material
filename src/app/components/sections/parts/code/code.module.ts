import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';

import { MatIconModule, MatButtonModule } from '@angular/material';

import { ClipboardDirective } from '../../../../directives/clipboard/clipboard.directive';
import { ClipboardService } from '../../../../directives/clipboard/clipboard.service';

import { XoMaterialCodeSectionComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    HighlightModule.forRoot(),
  ],
  providers: [
    ClipboardService
  ],
  declarations: [
    ClipboardDirective,
    XoMaterialCodeSectionComponent
  ],
  exports: [XoMaterialCodeSectionComponent]
})
export class XoMaterialCodeSectionModule { }
