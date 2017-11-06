import { User } from '../../shared/user.model';
import { LoginService } from '../../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  message: string = "This shouldn't show up";
  JSON;

  constructor(private loginService: LoginService) { 
    this.JSON = JSON
  }

  ngOnInit() {
    this.loginService.getProfile()
    .then((user) => {
      this.user = user
    } )
    .catch((err) => this.message = err.toString())
  }

}
