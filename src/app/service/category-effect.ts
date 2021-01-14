import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OccService } from './occ.service';

import { CategoryActionSuccess } from '../store/category/action/category-action';
import * as categoryActions from '../store/category/action/category-action';

@Injectable()
export class CategoryEffect {

  constructor(
    private actions$: Actions,
    private occService: OccService
  ) {
  }

  category$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.CATEGORY_ACTION),
    map((action: any) => ({payload: action.payload})),
    mergeMap(action => this.occService.getForCode(action.payload)
      .pipe(
        map(category => {
            return (new CategoryActionSuccess(category));
          }
        ),
        catchError(() => {
          return EMPTY;
        })
      )
    )
  ));
}
