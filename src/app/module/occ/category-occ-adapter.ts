import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { NavigationBarSubcategory } from '../../data/nav-bar-subcategory.data';

@Injectable()
export class OccCategoryAdapter {

  constructor(private httpClient: HttpClient) { }

  public getMockedHttpResponse(url: string): Observable<NavigationBarSubcategory> {
    return this.httpClient.get<NavigationBarSubcategory>(url);
  }
}
