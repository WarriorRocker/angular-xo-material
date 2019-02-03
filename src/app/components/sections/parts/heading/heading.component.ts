import { Component, Input } from '@angular/core';

@Component({
	selector: 'xo-material-sections-heading',
	templateUrl: './heading.component.html',
	styleUrls: ['./heading.component.scss']
})
export class XoMaterialHeadingSectionComponent {
	@Input() section: any;
}
