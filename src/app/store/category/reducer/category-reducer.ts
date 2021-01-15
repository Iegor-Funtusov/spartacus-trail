import { createReducer, on, props, createAction } from '@ngrx/store';
import * as categoryActions from '../action/category-action';
import { NavigationBarSubcategory } from '../../../data/nav-bar-subcategory.data';

export interface CategoryState {
  categoryState: Array<{
    id: number,
    value: any
  }>;
}

export const initialCategoryState: CategoryState = {
  categoryState: []
};

export const actionCreator = createAction(
  categoryActions.CATEGORY_ACTION_SUCCESS,
  props<{ payload: NavigationBarSubcategory }>()
);

export const categoryReducer = createReducer(
  initialCategoryState,
  on(actionCreator, (state, { payload }) => ( update(state, payload) ))
);

function update(prevState: CategoryState, payload): CategoryState {
  if (prevState.categoryState.filter(it => it.id === payload.code).length === 0) {
    prevState.categoryState.push({
      id: payload.code,
      value: payload.subcategories
    });
  }
  return prevState;
}
