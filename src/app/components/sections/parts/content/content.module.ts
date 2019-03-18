import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoMaterialContentSectionComponent } from './content.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [XoMaterialContentSectionComponent],
	exports: [XoMaterialContentSectionComponent]
})
export class XoMaterialContentSectionModule { }
