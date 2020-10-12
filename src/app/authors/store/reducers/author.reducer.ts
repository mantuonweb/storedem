import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './../../../store/reducers';
import * as AuthorActions from '../actions/author.actions';

export const authorFeatureKey = 'author';

export interface State extends AppState {
  saved:Boolean,
  loading:Boolean,
  authors:any[],
  error:any
}

export const initialState: State = {
  saved:false,
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
  //Add
  on(AuthorActions.addAuthors, state => {
    return {
      ...state,
      loading:true
    }
  }),
  on(AuthorActions.addAuthorsSuccess, (state, action) => {
    return {
      ...state,
      loading:false,
      saved:true,
      authors:[...state.authors,action.author]
    }
  }),
  on(AuthorActions.addAuthorsFailure, (state, action) => {
    return {
      ...state,
      loading:false,
      error:action.error
    }
  }),
  //Edit
   on(AuthorActions.editAuthors, state => {
    return {
      ...state,
      loading:true
    }
  }),
  on(AuthorActions.editAuthorsSuccess, (state, action) => {
     let newList = state.authors.map(item => {
      return item.id === action.author.id ? action.author : item;
    });
    return {
      ...state,
      loading:false,
      authors:newList
    }
  }),
  on(AuthorActions.editAuthorsFailure, (state, action) => {
    return {
      ...state,
      loading:false,
      error:action.error
    }
  }),
   on(AuthorActions.resetSaveStatus, (state) => {
    return {
      ...state,
      loading: false,
      saved: false
    }
  })
);

