import {Component, OnInit} from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { CmsBannerComponentMedia } from '@spartacus/core';
import { SimpleImageNavBarBannerComponent } from '../simple-image-nav-bar-banner/simple-image-nav-bar-banner.component';

@Component({
  selector: 'app-simple-banner',
  templateUrl: './simple-banner.component.html',
  styleUrls: ['./simple-banner.component.scss']
})
export class SimpleBannerComponent implements OnInit {

  public bannerImage: CmsBannerComponentMedia;

  constructor(
    public component: CmsComponentData<SimpleImageNavBarBannerComponent>
  ) {
    this.component.data$.subscribe(it => {
      this.bannerImage = it.bannerImage;
    });
  }
}
