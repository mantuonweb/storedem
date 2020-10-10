import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LoginActions from '../actions/login.actions';
import { LoginService } from '../../login.service';



@Injectable()
export class LoginEffects {

  loadLogins$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LoginActions.loadLogins),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.loginSevice.checkLogin(action.data).pipe(
          map(data => LoginActions.loadLoginsSuccess({ data })),
          catchError(error => of(LoginActions.loadLoginsFailure({ error }))))
      )
    );
  });

  /**
   * 
   * concatMap(action => this.auth.authUser(action.user).pipe(map(user => {
          return AuthActions.LoginSuccessAction({ user });
        }), catchError(err => {
          return of(AuthActions.LoginSuccessFailure({ error: (err && err.error && err.error.errorMessage) || 'Internal Server Error' }));
        })))
   */

  constructor(private actions$: Actions, private loginSevice: LoginService) { }

}
