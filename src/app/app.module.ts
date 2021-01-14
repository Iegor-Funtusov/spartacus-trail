import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { OccModule} from './module/occ/occ.module';
import { AppComponent } from './app.component';
import { CustomNavigationModule } from './module/custom-navigation/custom-navigation.module';
import { CategoryEffect } from './service/category-effect';
import { categoryReducer } from './store/category/reducer/category-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomNavigationModule,
    OccModule,
    EffectsModule.forRoot([CategoryEffect]),
    // StoreModule.forRoot({ categories: categoryReducer.categoryReducer }),
    StoreModule.forRoot({ categories: categoryReducer }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa']
      },
      authentication: {
        client_id: 'spartacususer',
        client_secret: 'password'
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
