import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '../reducers/login.reducer';

export const selectLoginState = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);
