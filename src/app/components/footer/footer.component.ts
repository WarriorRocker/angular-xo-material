import { Component, OnInit } from '@angular/core';

import { Globals, Config, ApiOptionsService } from 'angular-xo';

@Component({
  selector: 'xo-material-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class XoMaterialFooterComponent implements OnInit {
  appConfig: Config.AppConfig;
  footer: any;

  constructor(private _globals: Globals, private _options: ApiOptionsService) {
    this.appConfig = this._globals.appConfig;
  }

  ngOnInit() {
    this.getFooter();
  }

  getFooter() {
    this._options.get('xo_footer')
      .subscribe((response) => {
        if (response.success)
          this.footer = response.fields;
      });
  }
}
