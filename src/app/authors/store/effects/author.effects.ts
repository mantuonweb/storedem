import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  catchError,
  map,
  concatMap,
  withLatestFrom,
  filter, exhaustMap
} from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as AuthorActions from "../actions/author.actions";
import { AuthorService } from "../../author.service";
import { selectAuthors } from "../selectors/author.selectors";
import { State } from "../reducers/author.reducer";
import { Store } from "@ngrx/store";
import { resetAuthorLoading } from "../actions/author.actions";

@Injectable()
export class AuthorEffects {
  loadAuthors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorActions.loadAuthors),

      withLatestFrom(this.store.select(selectAuthors)),
      filter(([_, authors]) => {
        let status = !authors.length;
        !status && this.store.dispatch(resetAuthorLoading());
        return status;
      }),
      exhaustMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.authService.getAuthors().pipe(
          map(authors => AuthorActions.loadAuthorsSuccess({ authors })),
          catchError(error => of(AuthorActions.loadAuthorsFailure({ error })))
        )
      )
    );
  });
  saveAuthor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorActions.addAuthors),
      // withLatestFrom(this.store.select(selectAuthors)),

      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.authService.saveAuthor(action.author).pipe(
          map(author => AuthorActions.addAuthorsSuccess({ author })),
          catchError(error => of(AuthorActions.addAuthorsFailure({ error })))
        )
      )
    );
  });

  editAuthor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorActions.editAuthors),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.authService.editAuthor(action.author).pipe(
          map(author => AuthorActions.editAuthorsSuccess({ author })),
          catchError(error => of(AuthorActions.editAuthorsFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthorService,
    private store: Store<State>
  ) {}
}
