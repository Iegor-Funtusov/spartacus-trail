import { createFeatureSelector } from '@ngrx/store';

import { CategoryState } from '../reducer/category-reducer';

export const featureSelectorKey = 'categories';

export const categoryFeatureSelector = () => createFeatureSelector<CategoryState>(featureSelectorKey);
