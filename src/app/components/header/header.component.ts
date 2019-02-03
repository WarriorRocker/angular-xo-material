import { Component, OnInit } from '@angular/core';

import { Globals, Config, Menus, ApiMenusService } from 'angular-xo';

@Component({
  selector: 'xo-material-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class XoMaterialHeaderComponent implements OnInit {
  appConfig: Config.AppConfig;
  navItems: Array<Menus.NavigationItem>;

  constructor(private _globals: Globals, private _menus: ApiMenusService) {
    this.appConfig = this._globals.appConfig;
  }

  ngOnInit() {
    this.getNavigation();
  }

  getNavigation() {
    this._menus.get('header')
      .subscribe((response) => {
        if (response.success)
          this.navItems = response.items;
      });
  }
}
