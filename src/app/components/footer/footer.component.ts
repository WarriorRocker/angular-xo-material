import { Component, OnInit } from '@angular/core';

import { XoGlobals, XoConfig, XoApiOptionsService } from 'angular-xo';

@Component({
  selector: 'xo-material-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class XoMaterialFooterComponent implements OnInit {
  appConfig: XoConfig.AppConfig;
  footer: any;

  constructor(private _globals: XoGlobals, private _options: XoApiOptionsService) {
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
