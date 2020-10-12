import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  catchError,
  map,
  concatMap,
  withLatestFrom,
  filter,
  exhaustMap
} from "rxjs/operators";
import { of } from "rxjs";

import * as HomeActions from "../actions/home.actions";
import { HomeService } from "../../home.service";
import { State } from "../reducers/home.reducer";
import { Store } from "@ngrx/store";
import { selectCourses } from "../selectors/home.selectors";
import { resetLoadingStatus } from "../actions/home.actions";

@Injectable()
export class HomeEffects {
  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.loadHomes),
      withLatestFrom(this.store.select(selectCourses)),
      filter(([_, courses]) => {
        let status = !courses.length;
        !status && this.store.dispatch(resetLoadingStatus());
        return status;
        
      }),
      exhaustMap(() =>
        this.homeService.getCaurses().pipe(
          map(courses => {
            return HomeActions.loadHomesSuccess({ courses });
          }),
          catchError(error => of(HomeActions.loadHomesFailure({ error })))
        )
      )
    );
  });

  saveCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.courseSave),
      concatMap(action =>
        this.homeService.saveCourse(action.course).pipe(
          map(course => {
            return HomeActions.saveCourseSuccess({ course });
          }),
          catchError(error => of(HomeActions.saveCourseFailure({ error })))
        )
      )
    );
  });

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.courseEdit),
      concatMap(action =>
        this.homeService.editCourse(action.course).pipe(
          map(course => {
            return HomeActions.editCourseSuccess({ course });
          }),
          catchError(error => of(HomeActions.editCourseFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private homeService: HomeService,
    private store: Store<State>
  ) {}
}
