import { Router } from '@angular/router';
import { PlayGameService } from '../../shared/play-game.service';
import { Player } from '../../shared/player.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-dash',
  templateUrl: './player-dash.component.html',
  styleUrls: ['./player-dash.component.css']
})
export class PlayerDashComponent implements OnInit {
  player: Player;
  JSON;

  constructor(private play: PlayGameService, private router: Router) { 
    this.JSON = JSON;
  }

  ngOnInit() {
    this.player = this.play.getSelectedPlayer();
    if (!this.player) this.router.navigate(['/home']);
  }
}
