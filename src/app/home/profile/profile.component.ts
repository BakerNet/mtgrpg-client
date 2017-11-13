import { User } from '../../shared/user.model';
import { AuthService } from '../../auth/auth.service';
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

  constructor(private auth: AuthService) { 
    this.JSON = JSON
  }

  ngOnInit() {
    this.auth.getProfile()
    .then((user) => {
      this.user = user
    } )
    .catch((err) => this.message = err.toString())
  }

}
