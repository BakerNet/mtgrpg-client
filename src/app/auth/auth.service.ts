import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { User } from '../shared/user.model';

import { AUTH_CONFIG } from './auth0-variables';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  profileChange: Subject<any> = new Subject();
  user: User;
  
  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.user = new User(authResult.idTokenPayload);
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // Let subscribers know profile changed
    this.profileChange.next(1);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // let subscribers know logged out
    this.profileChange.next(0);
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        reject('Access token must exist to fetch profile');
      }
  
      const self = this;
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (err) reject(err);
        if (profile) {
          //console.log(profile)
          self.user = new User(profile);
          resolve(self.user);
        }
      });
    })
  }

}
