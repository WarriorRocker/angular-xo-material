import { Component, Input } from '@angular/core';

@Component({
	selector: 'xo-material-sections-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss']
})
export class XoMaterialImageSectionComponent {
	@Input() section: any;
}
