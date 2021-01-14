import { Action } from '@ngrx/store';

export const CATEGORY_ACTION = "[Category Page] Load Category For Code";
export const CATEGORY_ACTION_SUCCESS = "[Category Page] Load Category For Code Success";

export class CategoryAction implements Action {
  type = CATEGORY_ACTION;

  constructor(
    public payload: any
  ) { }
}

export class CategoryActionSuccess implements Action {
  type = CATEGORY_ACTION_SUCCESS;

  constructor(
    public payload: any
  ) { }
}
