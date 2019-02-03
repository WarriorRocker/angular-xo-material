import { Component, Input } from '@angular/core';

@Component({
	selector: 'xo-material-sections-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.scss']
})
export class XoMaterialCodeSectionComponent {
  @Input() section: any;
}
