import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const XoMaterialAppLazyRoutes: Routes = [
	{
		path: 'xo-material-page-default',
		loadChildren: './pages/default/default.module#XoMaterialDefaultPageModule'
	},
	{
		path: 'xo-material-page-home',
		loadChildren: './pages/home/home.module#XoMaterialHomePageModule'
	},
	{
		path: 'xo-material-page-content',
		loadChildren: './pages/content/content.module#XoMaterialContentPageModule'
	},
	{
		path: 'xo-material-page-posts',
		loadChildren: './pages/posts/posts.module#XoMaterialPostsPageModule'
	},
	{
		path: 'xo-material-page-sitemap',
		loadChildren: './pages/sitemap/sitemap.module#XoMaterialSitemapPageModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(XoMaterialAppLazyRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
