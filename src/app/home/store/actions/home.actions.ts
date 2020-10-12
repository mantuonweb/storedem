import { createAction, props } from '@ngrx/store';

export const loadHomes = createAction(
  '[Home] Load Homes'
);

export const loadHomesSuccess = createAction(
  '[Home] Load Homes Success',
  props<{ courses: any }>()
);

export const loadHomesFailure = createAction(
  '[Home] Load Homes Failure',
  props<{ error: any }>()
);
//Save
export const courseSave = createAction(
  '[Home] Save Course',
  props<{ course: any }>()
);

export const saveCourseSuccess = createAction(
  '[Home] Save Courses Success',
  props<{ course: any }>()
);

export const saveCourseFailure = createAction(
  '[Home] Save Courses Failure',
  props<{ error: any }>()
);
//Edit
export const courseEdit = createAction(
  '[Home] Edit Course',
  props<{ course: any }>()
);

export const editCourseSuccess = createAction(
  '[Home] Edit Courses Success',
  props<{ course: any }>()
);

export const editCourseFailure = createAction(
  '[Home] Edit Courses Failure',
  props<{ error: any }>()
);


//Reset Status
export const resetSaveStatus = createAction(
  '[Home] Reset Save Course Status'
);

export const resetLoadingStatus = createAction(
  '[Home] Reset Loading Course Status'
);
// export  type CourseAction = saveCourseFailure|saveCourseSuccess;