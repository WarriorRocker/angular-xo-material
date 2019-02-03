import { Component, Input } from '@angular/core';

@Component({
  selector: 'xo-material-sections-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class XoMaterialTableSectionComponent {
  @Input() section: any;
}
