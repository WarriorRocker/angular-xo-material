/**
 * @XoPageTemplate Default
 * @XoDefaultTemplate True
 * @XoLoadChildren XoMaterialDefaultPageModule
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XoPostResolver, XoBreadcrumbsResolver } from 'angular-xo';

import { XoMaterialDefaultPageComponent } from './default.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { XoMaterialBackToTopModule } from '../../components/backToTop/backToTop.module';

@NgModule({
	imports: [
		XoMaterialBreadcrumbsModule,
		XoMaterialBackToTopModule,
		RouterModule.forChild([
			{
				path: '',
				component: XoMaterialDefaultPageComponent,
				resolve: {
					post: XoPostResolver,
					breadcrumbs: XoBreadcrumbsResolver
				}
			}
		])
	],
	declarations: [XoMaterialDefaultPageComponent]
})
export class XoMaterialDefaultPageModule { }
