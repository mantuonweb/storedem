import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '../reducers/login.reducer';

const selectLoginState = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);

export const selectLoginStatus = createSelector(selectLoginState,loginState => {
  return loginState? loginState.user :null;
})

export const selectIsLoggedIn = createSelector(selectLoginStatus,user => {
  return Boolean(user);
})
