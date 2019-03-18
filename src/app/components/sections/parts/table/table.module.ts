import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoMaterialTableSectionComponent } from './table.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [XoMaterialTableSectionComponent],
	exports: [XoMaterialTableSectionComponent]
})
export class XoMaterialTableSectionModule { }
