import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthorActions from '../actions/author.actions';
import { AuthorService } from '../../author.service';



@Injectable()
export class AuthorEffects {

  loadAuthors$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AuthorActions.loadAuthors),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.authService.getAuthors().pipe(
          map(authors => AuthorActions.loadAuthorsSuccess({ authors })),
          catchError(error => of(AuthorActions.loadAuthorsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,private authService:AuthorService) {}

}
