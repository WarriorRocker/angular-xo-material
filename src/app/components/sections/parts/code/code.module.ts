import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { HighlightModule } from 'ngx-highlightjs';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { MatIconModule, MatButtonModule } from '@angular/material';

import { ClipboardDirective } from '../../../../directives/clipboard/clipboard.directive';
import { ClipboardService } from '../../../../directives/clipboard/clipboard.service';

import { XoMaterialCodeSectionComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CodemirrorModule
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
