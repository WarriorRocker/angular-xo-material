import { Component, OnInit } from '@angular/core';

import { XoGlobals, XoConfig, XoMenus, XoApiMenusService } from 'angular-xo';

@Component({
  selector: 'xo-material-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class XoMaterialHeaderComponent implements OnInit {
  appConfig: XoConfig.AppConfig;
  navItemsLeft: Array<XoMenus.NavigationItem>;
  navItemsRight: Array<XoMenus.NavigationItem>;

  constructor(private _globals: XoGlobals, private _menus: XoApiMenusService) {
    this.appConfig = this._globals.appConfig;
  }

  ngOnInit() {
    this.getNavigation();
  }

  getNavigation() {
    this._menus.get('header_left')
      .subscribe((response) => {
        if (response.success)
          this.navItemsLeft = response.items;
      });

    this._menus.get('header_right')
      .subscribe((response) => {
        if (response.success)
          this.navItemsRight = response.items;
      });
  }
}
