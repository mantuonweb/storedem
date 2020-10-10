import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import { selectFeatureIsLoggedIn } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-courses';
  constructor(private store: Store<AppState>, private router:Router) { 
    this.store.select(selectFeatureIsLoggedIn).subscribe((usr)=>{
      console.log(usr);
    })
  }
}
