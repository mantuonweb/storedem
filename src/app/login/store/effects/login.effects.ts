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
        this.loginSevice.checkLogin(action.user).pipe(
          map(user => {
            console.log(user);
            return LoginActions.loadLoginsSuccess({ user })
          }),
          catchError(error => of(LoginActions.loadLoginsFailure({ error }))))
      )
    );
  });
  constructor(private actions$: Actions, private loginSevice: LoginService) { }

}
