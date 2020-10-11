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
