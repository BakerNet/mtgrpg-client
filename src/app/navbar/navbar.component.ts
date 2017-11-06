import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mode: UrlSegment;
  isLoggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router) { 
    this.loginService.handleAuthentication();
  }

  ngOnInit() {
    this.router.events.filter((event) => event instanceof NavigationEnd)
    .subscribe(
      (event) => this.mode = event['url'].split('/')[1]
    )
    this.loginService.profileChange.subscribe(
      () => this.isLoggedIn = this.loginService.isAuthenticated()
    )
    this.isLoggedIn = this.loginService.isAuthenticated();
  }
    
  ngOnDestroy(){
    this.loginService.profileChange.unsubscribe();
  }

  onLogin(){
    this.loginService.login();
  }

  onLogout(){
    this.loginService.logout();
  }
}
