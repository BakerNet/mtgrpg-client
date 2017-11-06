import { GameApiService } from '../shared/game-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api: GameApiService) { }

  ngOnInit() {

  }

}
