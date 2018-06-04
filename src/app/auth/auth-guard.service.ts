import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log('is auth', this.auth.isAuthenticated())
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
}