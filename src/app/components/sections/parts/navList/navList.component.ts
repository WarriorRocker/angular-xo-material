import { Component, Input } from '@angular/core';

@Component({
	selector: 'xo-material-sections-nav-list',
	templateUrl: './navList.component.html',
	styleUrls: ['./navList.component.scss']
})
export class XoMaterialNavListSectionComponent {
	@Input() section: any;
}
