import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './../../../store/reducers';
import * as AuthorActions from '../actions/author.actions';

export const authorFeatureKey = 'author';

export interface State extends AppState {
  loading:Boolean,
  authors:any[],
  error:any
}

export const initialState: State = {
  authors:[],
  loading:false,
  error:null
};


export const reducer = createReducer(
  initialState,

  on(AuthorActions.loadAuthors, state => {
    return {
      ...state,
      loading:true
    }
  }),
  on(AuthorActions.loadAuthorsSuccess, (state, action) => {
    return {
      ...state,
      loading:false,
      authors:action.authors
    }
  }),
  on(AuthorActions.loadAuthorsFailure, (state, action) => {
    return {
      ...state,
      loading:false,
      error:action.error
    }
  }),

);

