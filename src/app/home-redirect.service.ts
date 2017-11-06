import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class HomeRedirectService {

  constructor(private router: Router, private loginService: LoginService) { }
  
    canActivate(): boolean{
      if(this.loginService.isAuthenticated()){
        this.router.navigate(['/', 'home']);
        return false;
      }
      return true;
    }

}
