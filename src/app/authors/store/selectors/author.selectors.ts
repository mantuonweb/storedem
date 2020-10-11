import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthor from '../reducers/author.reducer';

export const selectAuthorState = createFeatureSelector<fromAuthor.State>(
  fromAuthor.authorFeatureKey
);

export const selectAuthors = createSelector(selectAuthorState, (state) => {
  return state.authors;
});

export const selectAuthorsLoading = createSelector(selectAuthorState, (state) => {
  return state.loading;
});

export const selectAuthorsById = (id) => {
  return createSelector(selectAuthorState, (state) => {
    return state.authors.find(item=>item.id==id);
  });
}