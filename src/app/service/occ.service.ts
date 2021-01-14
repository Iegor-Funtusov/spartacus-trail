import { Injectable } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';
import { Observable } from 'rxjs';

import { NavigationBarSubcategory } from '../data/nav-bar-subcategory.data';
import { OccCategoryAdapter } from '../module/occ/category-occ-adapter';

@Injectable({
  providedIn: 'root'
})
export class OccService {

  constructor(
    protected occEndpoints: OccEndpointsService,
    protected occAdapter: OccCategoryAdapter
  ) { }

  public getForCode(code: number): Observable<NavigationBarSubcategory> {
    return this.occAdapter.getMockedHttpResponse(
      this.getEndpoint(String(code))
    );
  }

  protected getEndpoint(code: string, scope?: string): string {
    return this.occEndpoints.getUrl(
      'category',
      {
        code: code,
      }
    );
  }
}
