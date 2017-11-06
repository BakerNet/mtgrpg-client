import { Player } from '../shared/player.model';
import { PlayGameService } from '../shared/play-game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Player;

  constructor(private play: PlayGameService) { }

  ngOnInit() {
    this.player = this.play.getSelectedPlayer();
  }
}
