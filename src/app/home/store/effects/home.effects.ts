import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as HomeActions from '../actions/home.actions';
import { HomeService } from '../../home.service';



@Injectable()
export class HomeEffects {

  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeActions.loadHomes),
      concatMap((action) =>
        this.homeService.getCaurses().pipe(
          map(caurses => {
            console.log(caurses)
            return HomeActions.loadHomesSuccess({ caurses })
          }),
          catchError(error => of(HomeActions.loadHomesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private homeService: HomeService) { }

}
