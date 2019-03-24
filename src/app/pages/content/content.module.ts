/**
 * @XoPageTemplate Content
 * @XoLoadChildren XoMaterialContentPageModule
 * @XoAcfGroups xo_content
 * @XoDisableEditor True
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoPostResolver, XoBreadcrumbsResolver } from 'angular-xo';

import { XoMaterialContentPageComponent } from './content.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { XoMaterialSectionsModule } from '../../components/sections/sections.module';
import { XoMaterialContentsModule } from '../../components/contents/contents.module';

@NgModule({
	imports: [
		CommonModule,
		XoMaterialBreadcrumbsModule,
		XoMaterialSectionsModule,
		XoMaterialContentsModule,
		RouterModule.forChild([
			{
				path: '',
				component: XoMaterialContentPageComponent,
				resolve: {
					post: XoPostResolver,
					breadcrumbs: XoBreadcrumbsResolver
				}
			}
		])
	],
	declarations: [XoMaterialContentPageComponent]
})
export class XoMaterialContentPageModule { }
