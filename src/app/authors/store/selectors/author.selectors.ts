import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthor from '../reducers/author.reducer';

export const selectAuthorState = createFeatureSelector<fromAuthor.State>(
  fromAuthor.authorFeatureKey
);

export const selectCourses = createSelector(selectAuthorState,(state)=>{
  return state.authors;
});

export const selectCoursesLoading = createSelector(selectAuthorState,(state)=>{
  return state.loading;
});