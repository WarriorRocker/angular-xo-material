import { Component, Input, OnInit } from '@angular/core';

import { EditorConfiguration } from 'codemirror';

@Component({
	selector: 'xo-material-sections-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.scss']
})
export class XoMaterialCodeSectionComponent implements OnInit {
  @Input() section: any;

  editorConfiguration: EditorConfiguration = {
    viewportMargin: Infinity,
    lineWrapping: true,
    readOnly: true
  };

  ngOnInit() {
    if ((this.section != null) && (this.section.mode != null))
      this.editorConfiguration.mode = this.section.mode
  }
}
