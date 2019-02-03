import { Component, Input } from '@angular/core';

@Component({
	selector: 'xo-material-sections-spacer',
	templateUrl: './spacer.component.html',
	styleUrls: ['./spacer.component.scss']
})
export class XoMaterialSpacerSectionComponent {
	@Input() section: any;
}
