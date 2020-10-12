import { createAction, props } from '@ngrx/store';

export const loadAuthors = createAction(
  '[Author] Load Authors'
);

export const loadAuthorsSuccess = createAction(
  '[Author] Load Authors Success',
  props<{ authors: any }>()
);

export const loadAuthorsFailure = createAction(
  '[Author] Load Authors Failure',
  props<{ error: any }>()
);



//Edit
export const editAuthors = createAction(
  '[Author] Edit Author',
   props<{ author: any }>()
);

export const editAuthorsSuccess = createAction(
  '[Author] Edit Author Success',
  props<{ author: any }>()
);

export const editAuthorsFailure = createAction(
  '[Author] Edit Author Failure',
  props<{ error: any }>()
);


//Add
export const addAuthors = createAction(
  '[Author] Add Author',
   props<{ author: any }>()
);

export const addAuthorsSuccess = createAction(
  '[Author] Add Author Success',
  props<{ author: any }>()
);

export const addAuthorsFailure = createAction(
  '[Author] Add Author Failure',
  props<{ error: any }>()
);

export const resetSaveStatus = createAction(
 '[Author] Reset Author Save'
);


