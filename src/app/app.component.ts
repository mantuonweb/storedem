import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setTheme } from 'ngx-bootstrap/utils';

import { AppState } from './store/reducers';
import { selectFeatureIsLoggedIn } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-courses';
  isLoggedIn$;
  constructor(private store: Store<AppState>, private router:Router) { 
    setTheme("bs4");
    this.isLoggedIn$ = this.store.select(selectFeatureIsLoggedIn);
  }
}
