import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class HomeRedirectService {

  constructor(private router: Router, private auth: AuthService) { }
  
    canActivate(): boolean{
      if(this.auth.loggedIn){
        this.router.navigate(['/', 'home']);
        return false;
      }
      return true;
    }

}
