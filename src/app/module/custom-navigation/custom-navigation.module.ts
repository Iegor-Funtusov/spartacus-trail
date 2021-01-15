import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import {
  GenericLinkModule, IconModule,
  MediaModule,
  OutletModule,
  PageComponentModule,
  StarRatingModule
} from '@spartacus/storefront';

import { CustomNavigationUiComponent } from '../../component/custom-navigation-ui/custom-navigation-ui.component';
import { SimpleBannerComponent } from '../../component/simple-banner/simple-banner.component';
import { NavigationBarSubcategoryComponent } from '../../component/navigation-bar-subcategory/navigation-bar-subcategory.component';

@NgModule({
  declarations: [
    SimpleBannerComponent,
    CustomNavigationUiComponent,
    NavigationBarSubcategoryComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    GenericLinkModule,
    MediaModule,
    OutletModule,
    PageComponentModule,
    UrlModule,
    RouterModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleImageNavBarBannerComponent: {
          component: SimpleBannerComponent
        },
        CategoryNavBarComponent: {
          component: NavigationBarSubcategoryComponent
        }
      }
    } as CmsConfig)
  ],
  exports: [CustomNavigationUiComponent, CommonModule],
  entryComponents: [SimpleBannerComponent]
})
export class CustomNavigationModule { }
