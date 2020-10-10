import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AppState } from '../store/reducers';
import { selectFeatureIsLoggedIn } from '../store/selectors';
@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private store: Store<AppState>) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectFeatureIsLoggedIn).pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}