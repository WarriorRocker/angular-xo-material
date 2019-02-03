import { Component, Input } from '@angular/core';

@Component({
	selector: 'xo-material-sections-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class XoMaterialContentSectionComponent {
	@Input() section: any;
}
