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
      list:action.courses
    }
  }),
  on(HomeActions.loadHomesFailure, (state, action) => state),

  //Save
  on(HomeActions.courseSave, state => state),
  on(HomeActions.saveCourseSuccess, (state, action) => {
    return {
      ...state,
      list:[...state.list,action.course]
    }
  }),
  on(HomeActions.saveCourseFailure, (state, action) => state),

  //Edit
  on(HomeActions.courseEdit, state => state),
  on(HomeActions.editCourseSuccess, (state, action) => {
    let newList = state.list.map(item=>{
      return item.course === action.course.course? action.course:item;
    });
    console.log(newList);
    return {
      ...state,
      list:newList
    }
  }),
  on(HomeActions.editCourseFailure, (state, action) => state),

);

