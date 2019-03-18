import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatTabsModule } from '@angular/material';

import { XoMaterialHeaderComponent } from './header.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatTabsModule,
	],
	declarations: [
		XoMaterialHeaderComponent
	],
	exports: [
		XoMaterialHeaderComponent
	]
})
export class XoMaterialHeaderModule { }
