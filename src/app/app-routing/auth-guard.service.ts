import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean{
    if(this.auth.loggedIn){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
