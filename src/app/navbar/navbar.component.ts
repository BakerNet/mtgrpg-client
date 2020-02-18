import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mode: UrlSegment;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(
      (event) => this.mode = event['url'].split('/')[1]
    )
  }
}
