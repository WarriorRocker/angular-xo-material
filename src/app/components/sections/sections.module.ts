import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XoMaterialHeadingSectionModule } from './parts/heading/heading.module';
import { XoMaterialContentSectionModule } from './parts/content/content.module';
import { XoMaterialCodeSectionModule } from './parts/code/code.module';
import { XoMaterialTableSectionModule } from './parts/table/table.module';
import { XoMaterialNavListSectionModule } from './parts/navList/navList.module';
import { XoMaterialSpacerSectionModule } from './parts/spacer/spacer.module';

import { XoMaterialSectionsComponent } from './sections.component';

@NgModule({
  imports: [
    CommonModule,
    XoMaterialHeadingSectionModule,
    XoMaterialContentSectionModule,
    XoMaterialCodeSectionModule,
    XoMaterialTableSectionModule,
    XoMaterialNavListSectionModule,
    XoMaterialSpacerSectionModule
  ],
  declarations: [XoMaterialSectionsComponent],
  exports: [XoMaterialSectionsComponent]
})
export class XoMaterialSectionsModule { }
