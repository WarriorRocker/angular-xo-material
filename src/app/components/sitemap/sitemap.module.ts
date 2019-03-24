import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material';

import { XoMaterialSitemapComponent } from './sitemap.component';
import { XoMaterialSitemapEntriesComponent } from './entries/entries.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatListModule
	],
	declarations: [
		XoMaterialSitemapComponent,
		XoMaterialSitemapEntriesComponent
	],
	exports: [
		XoMaterialSitemapComponent
	]
})
export class XoMaterialSitemapModule { }
