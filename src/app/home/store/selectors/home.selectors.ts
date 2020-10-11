import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';

export const selectHomeState = createFeatureSelector<fromHome.State>(
  fromHome.homeFeatureKey
);

export const selectCourses = createSelector(selectHomeState,(state)=>{
  return state.list;
});

export const selectCoursesSaved = createSelector(selectHomeState,(state)=>{
  return state.saved;
});
export const selectCoursesLoading = createSelector(selectHomeState,(state)=>{
  return state.loading;
});