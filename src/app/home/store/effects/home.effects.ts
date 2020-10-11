import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HomeActions from '../actions/home.actions';
import { HomeService } from '../../home.service';



@Injectable()
export class HomeEffects {

  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeActions.loadHomes),
      concatMap(() =>
        this.homeService.getCaurses().pipe(
          map(courses => {
            return HomeActions.loadHomesSuccess({ courses })
          }),
          catchError(error => of(HomeActions.loadHomesFailure({ error }))))
      )
    );
  });

  saveCourse$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeActions.courseSave),
      concatMap((action) =>
        this.homeService.saveCourse(action.course).pipe(
          map(course => {
            return HomeActions.saveCourseSuccess({ course })
          }),
          catchError(error => of(HomeActions.saveCourseFailure({ error }))))
      )
    );
  });

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.courseEdit),
      concatMap((action) =>
        this.homeService.editCourse(action.course).pipe(
          map(course => {
            return HomeActions.editCourseSuccess({ course })
          }),
          catchError(error => of(HomeActions.editCourseFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private homeService: HomeService) { }

}
