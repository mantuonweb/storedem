import { createReducer, on } from '@ngrx/store';
import { AppState } from './../../../store/reducers';
import * as HomeActions from '../actions/home.actions';

export const homeFeatureKey = 'home';

export interface State extends AppState {
  loading?: boolean,
  saved?: boolean,
  list: Array<any>
}

export const initialState: State = {
  loading: false,
  saved: false,
  list: []
};


export const reducer = createReducer(
  initialState,

  on(HomeActions.loadHomes, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(HomeActions.loadHomesSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      list: action.courses
    }
  }),
  on(HomeActions.loadHomesFailure, (state) => state),

  //Save
  on(HomeActions.courseSave, state => {
    return {
      ...state,
      loading: true,
      saved: false
    }
  }),
  on(HomeActions.saveCourseSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      saved: true,
      list: [...state.list, action.course]
    }
  }),
  on(HomeActions.saveCourseFailure, (state) => state),

  //Edit
  on(HomeActions.courseEdit, state => {
    return {
      ...state,
      loading: true,
      saved: false
    }
  }),
  on(HomeActions.editCourseSuccess, (state, action) => {
    let newList = state.list.map(item => {
      return item.course === action.course.course ? action.course : item;
    });
    console.log(newList);
    return {
      ...state,
      loading: false,
      saved: true,
      list: newList
    }
  }),
  on(HomeActions.editCourseFailure, (state) => state),
  on(HomeActions.resetSaveStatus, (state) => {
    return {
      ...state,
      loading: false,
      saved: false
    }
  }),
   on(HomeActions.resetLoadingStatus, (state) => {
    return {
      ...state,
      loading: false
    }
  })

);

