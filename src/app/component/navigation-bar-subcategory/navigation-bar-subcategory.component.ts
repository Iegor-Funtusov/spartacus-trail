import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CategoryAction } from '../../store/category/action/category-action';
import { CategoryState } from '../../store/category/reducer/category-reducer';
import * as categoryFeature from '../../store/category/selectors/category-state-feature-selector';
import { NavigationBarParentCategory as NavigationBarParentCategoryComponent } from '../../data/nav-bar-category.data';

@Component({
  selector: 'app-navigation-bar-subcategory',
  templateUrl: './navigation-bar-subcategory.component.html',
  styleUrls: ['./navigation-bar-subcategory.component.scss']
})
export class NavigationBarSubcategoryComponent implements OnInit {

  private featureSelector = categoryFeature.categoryFeatureSelector(); // <-- invoke imported function to create selector
  private $categoryState: Observable<Array<{ id: number; value: any }>>;

  constructor(
    private component: CmsComponentData<NavigationBarParentCategoryComponent>,
    private store: Store<State<CategoryState>>,
  ) {
    this.component.data$.subscribe(it =>
      this.store.dispatch(new CategoryAction(it.category))
    );
  }

  ngOnInit(): void {
    this.$categoryState = this.store.select(this.featureSelector).pipe(
      map(it => it.categoryState) // <-- get necessary information from the StoreState and save it to observable
    );
  }

  private getForCode(code): [any] {
    let result;
    this.$categoryState.subscribe(it => {
      const subcategory = it.find(category => category.id === code);
      result = subcategory === undefined ? [] : subcategory.value;
    });
    return result;
  }
}
