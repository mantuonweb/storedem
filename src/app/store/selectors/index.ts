import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectLoginFeature = (state: AppState) => state.login;

export const selectFeatureIsLoggedIn = createSelector(selectLoginFeature,state => {
  return Boolean(state && state.user);
})