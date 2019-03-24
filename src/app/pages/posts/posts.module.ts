/**
 * @XoPageTemplate Post
 * @XoPostTypes !page
 * @XoLoadChildren XoMaterialPostsPageModule
 * @XoDisableEditor True
 * @XoAcfGroups xo_content
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { XoPostResolver, XoTermResolver, XoBreadcrumbsResolver } from 'angular-xo';

import { XoMaterialPostsPagePostComponent } from './post/post.component';
import { XoMaterialPostsPageTermComponent } from './term/term.component';

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
				path: ':category',
				children: [
					{
						path: '',
						pathMatch: 'full',
						component: XoMaterialPostsPageTermComponent,
						resolve: {
							term: XoTermResolver,
							breadcrumbs: XoBreadcrumbsResolver

						},
					},
					{
						path: ':slug',
						pathMatch: 'full',
						component: XoMaterialPostsPagePostComponent,
						resolve: {
							term: XoTermResolver,
							post: XoPostResolver,
							breadcrumbs: XoBreadcrumbsResolver
						}
					}
				]
			}

		])
	],
	declarations: [
		XoMaterialPostsPagePostComponent,
		XoMaterialPostsPageTermComponent
	]
})
export class XoMaterialPostsPageModule { }
