import { Component, Input } from '@angular/core';

@Component({
  selector: '[xo-material-sections]',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class XoMaterialSectionsComponent {
  @Input() sections: Array<any>;
}
