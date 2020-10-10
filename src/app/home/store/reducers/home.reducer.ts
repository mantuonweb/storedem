import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './../../../store/reducers';
import * as HomeActions from '../actions/home.actions';
import { act } from '@ngrx/effects';

export const homeFeatureKey = 'home';

export interface State extends AppState {
  list:Array<any>
}

export const initialState: State = {
  list:[]
};


export const reducer = createReducer(
  initialState,

  on(HomeActions.loadHomes, state => state),
  on(HomeActions.loadHomesSuccess, (state, action) => {
    return {
      ...state,
      list:action.caurses
    }
  }),
  on(HomeActions.loadHomesFailure, (state, action) => state),

);

