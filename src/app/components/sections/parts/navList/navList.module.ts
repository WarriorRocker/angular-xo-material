import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material';

import { XoMaterialNavListSectionComponent } from './navList.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatListModule
	],
	declarations: [XoMaterialNavListSectionComponent],
	exports: [XoMaterialNavListSectionComponent]
})
export class XoMaterialNavListSectionModule { }
