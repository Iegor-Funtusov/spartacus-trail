import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';

import { defaultMyOccConfig } from './category-occ-config';
import { OccCategoryAdapter } from './category-occ-adapter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultMyOccConfig)
  ],
  providers: [
    {
      provide: OccCategoryAdapter,
      useClass: OccCategoryAdapter
    }
  ]
})
export class OccModule { }
