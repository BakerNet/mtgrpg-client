import { AuthService } from '../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean{
    if(this.auth.isAuthenticated()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
