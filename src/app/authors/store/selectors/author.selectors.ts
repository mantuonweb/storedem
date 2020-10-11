import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthor from '../reducers/author.reducer';

export const selectAuthorState = createFeatureSelector<fromAuthor.State>(
  fromAuthor.authorFeatureKey
);
