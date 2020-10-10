import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  checkLogin(user){
    return of(user)
  }
}
