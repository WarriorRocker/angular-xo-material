import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoMaterialImageSectionComponent } from './image.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [XoMaterialImageSectionComponent],
	exports: [XoMaterialImageSectionComponent]
})
export class XoMaterialImageSectionModule { }
