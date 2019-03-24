/**
 * @XoPageTemplate Sitemap
 * @XoLoadChildren XoMaterialSitemapPageModule
 * @XoAcfGroups xo_content
 * @XoDisableEditor True
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoPostResolver } from 'angular-xo';

import { XoMaterialSitemapPageComponent } from './sitemap.component';
import { XoMaterialSectionsModule } from '../../components/sections/sections.module';
import { XoMaterialSitemapModule } from '../../components/sitemap/sitemap.module';

@NgModule({
	imports: [
		CommonModule,
		XoMaterialSectionsModule,
		XoMaterialSitemapModule,
		RouterModule.forChild([
			{
				path: '',
				component: XoMaterialSitemapPageComponent,
				resolve: {
					post: XoPostResolver
				}
			}
		])
	],
	declarations: [XoMaterialSitemapPageComponent]
})
export class XoMaterialSitemapPageModule { }
