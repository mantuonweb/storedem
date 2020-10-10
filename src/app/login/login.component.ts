import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from './login.service';
import { loadLogins } from './store/actions/login.actions';
import { State } from './store/reducers/login.reducer';
import { selectIsLoggedIn, selectLoginStatus } from './store/selectors/login.selectors';

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
  constructor(private loginService:LoginService,private store: Store<State>, private router:Router) { }

  ngOnInit(): void {
    this.store.select(selectIsLoggedIn).subscribe((loggedIn)=>{
      console.log(loggedIn)
      if(loggedIn){
        this.router.navigate(['./home']);
      }
    });
  }
  submit(){
    this.store.dispatch(loadLogins({user:this.authForm.value}))
  }
}
