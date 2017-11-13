import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { PlayGameService } from '../../shared/play-game.service';

import { Game } from '../../shared/game.model';

@Component({
  selector: 'app-gm-dash',
  templateUrl: './gm-dash.component.html',
  styleUrls: ['./gm-dash.component.css']
})
export class GmDashComponent implements OnInit {
  game: Game;
  JSON;

  constructor(private play: PlayGameService, private router: Router) { 
    this.JSON = JSON;
  }

  ngOnInit() {
    this.game = this.play.getSelectedGame()
    if(!this.game) this.router.navigate(['/']);
  }

}
