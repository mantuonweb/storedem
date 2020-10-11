import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthorActions from '../actions/author.actions';



@Injectable()
export class AuthorEffects {

  loadAuthors$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AuthorActions.loadAuthors),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AuthorActions.loadAuthorsSuccess({ data })),
          catchError(error => of(AuthorActions.loadAuthorsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
