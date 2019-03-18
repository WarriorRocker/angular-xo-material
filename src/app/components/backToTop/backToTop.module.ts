import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatButtonModule } from '@angular/material';

import { XoMaterialBackToTopComponent } from './backToTop.component';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule
	],
	declarations: [XoMaterialBackToTopComponent],
	exports: [XoMaterialBackToTopComponent]
})
export class XoMaterialBackToTopModule { }
