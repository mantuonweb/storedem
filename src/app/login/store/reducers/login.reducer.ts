import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(LoginActions.loadLogins, state => state),
  on(LoginActions.loadLoginsSuccess, (state, action) => state),
  on(LoginActions.loadLoginsFailure, (state, action) => state),

);

