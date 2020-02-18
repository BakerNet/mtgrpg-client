import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../shared/user.model';

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
    this.auth.userProfile$
    .subscribe((user) => {
      this.user = user
    }, (err) => this.message = err.toString() )
  }
}
