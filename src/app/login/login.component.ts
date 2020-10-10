import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadLogins } from './store/actions/login.actions';
import { State } from './store/reducers/login.reducer';
import { selectIsLoggedIn } from './store/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  chechLoginStatue$
  constructor(private store: Store<State>, private router:Router) { }

  ngOnInit(): void {
    this.chechLoginStatue$ = this.store.select(selectIsLoggedIn).subscribe((loggedIn)=>{
      if(loggedIn){
        this.router.navigate(['./home']);
      }
    });
  }
  submit(){
    this.store.dispatch(loadLogins({user:this.authForm.value}))
  }
  ngOnDestroy(){
    this.chechLoginStatue$.unsubscribe();
  }
}
