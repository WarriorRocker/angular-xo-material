import { Routes } from '@angular/router';

export const XoMaterialAppLazyRoutes: Routes = [
  {
    path: 'xo-material-page-default',
    loadChildren: './pages/default/default.module#XoMaterialDefaultPageModule',
  },
  {
    path: 'xo-material-page-home',
    loadChildren: './pages/home/home.module#XoMaterialHomePageModule',
  },
  {
    path: 'xo-material-page-content',
    loadChildren: './pages/content/content.module#XoMaterialContentPageModule',
  }
];
