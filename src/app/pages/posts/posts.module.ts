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

import { XoPostResolver } from 'angular-xo';

import { XoMaterialPostsPageComponent } from './posts.component';
import { XoMaterialPostsPagePostComponent } from './post/post.component';

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
				component: XoMaterialPostsPageComponent,
				children: [
					//{
					//	path: 'categories/:slug',
					//	pathMatch: 'full',
					//	component: XodusPostsPageCategoryComponent
					//},
					{
						path: ':slug',
						pathMatch: 'full',
						component: XoMaterialPostsPagePostComponent,
						resolve: {
							post: XoPostResolver
						}
					}
				]
			}
		])
	],
	declarations: [
		XoMaterialPostsPageComponent,
		XoMaterialPostsPagePostComponent,
		//XoMaterialPostsPageCategoryComponent
	]
})
export class XoMaterialPostsPageModule { }