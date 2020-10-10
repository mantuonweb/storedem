import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {
  user: any
}

export const initialState: State = {
  user: null
};


export const reducer = createReducer(
  initialState,

  on(LoginActions.loadLogins, state => state),
  on(LoginActions.loadLoginsSuccess, (state, action) => {
    return {...state,user:action.user}
  }),
  on(LoginActions.loadLoginsFailure, (state, action) => state),

);

