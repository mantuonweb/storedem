import { Action, createReducer, on } from '@ngrx/store';
import * as AuthorActions from '../actions/author.actions';

export const authorFeatureKey = 'author';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(AuthorActions.loadAuthors, state => state),
  on(AuthorActions.loadAuthorsSuccess, (state, action) => state),
  on(AuthorActions.loadAuthorsFailure, (state, action) => state),

);

