// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';

import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthService {
  constructor() {}
  // ...
  jwtHelper: JwtHelper = new JwtHelper();
  public isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    if(token == null){
      token = 'null';
      return false;
    }
    let t = JSON.parse(token)
    console.log(t.access)
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(t.access);
  }
}