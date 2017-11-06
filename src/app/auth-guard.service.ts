import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }

  canActivate(): boolean{
    if(this.loginService.isAuthenticated()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
