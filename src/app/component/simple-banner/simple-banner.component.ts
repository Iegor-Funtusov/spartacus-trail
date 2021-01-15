import { Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { CmsBannerComponentMedia } from '@spartacus/core';
import { SimpleImageNavBarBannerComponent } from '../../data/simple-image-nav-bar-banner.component';

@Component({
  selector: 'app-simple-banner',
  templateUrl: './simple-banner.component.html',
  styleUrls: ['./simple-banner.component.scss']
})
export class SimpleBannerComponent {

  public bannerImage: CmsBannerComponentMedia;

  constructor(public component: CmsComponentData<SimpleImageNavBarBannerComponent>) {
    this.component.data$.subscribe(it => {
      this.bannerImage = it.bannerImage;
    });
  }
}
