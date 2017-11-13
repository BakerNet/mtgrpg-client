import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mode: UrlSegment;
  isLoggedIn: boolean;

  constructor(private auth: AuthService, private router: Router) { 
    this.auth.handleAuthentication();
  }

  ngOnInit() {
    this.router.events.filter((event) => event instanceof NavigationEnd)
    .subscribe(
      (event) => this.mode = event['url'].split('/')[1]
    )
    this.auth.profileChange.subscribe(
      () => this.isLoggedIn = this.auth.isAuthenticated()
    )
    this.isLoggedIn = this.auth.isAuthenticated();
  }
    
  ngOnDestroy(){
    this.auth.profileChange.unsubscribe();
  }

  onLogin(){
    this.auth.login();
  }

  onLogout(){
    this.auth.logout();
  }
}
