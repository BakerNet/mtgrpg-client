import { Subscription } from 'rxjs/Rx';
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
  playerUpdates: Subscription;
  availableStats = 0;
  lvlUp = false;
  JSON;

  constructor(private play: PlayGameService, private router: Router) { 
    this.JSON = JSON;
  }

  ngOnInit() {
    this.player = this.play.getSelectedPlayer();
    if (!this.player) this.router.navigate(['/home']);
    this.startUpdates();
  }

  pauseUpdates(){
    this.playerUpdates.unsubscribe();
  }

  startUpdates(){
    this.playerUpdates = this.play.getPlayerUpdates(this.player)
    .subscribe(
      player =>
        this.player = player
    )
  }

  startLevelUp(){
    this.playerUpdates.unsubscribe();
    this.player.level++;
    this.availableStats = 2;
    this.lvlUp = true;
  }

  cancelLevelUp(){
    this.availableStats = 0;
    this.lvlUp = false;
    this.startUpdates();
  }

  saveLevelUp(){
    this.play.updatePlayer(this.player);
    this.availableStats = 0;
    this.lvlUp = false;
    this.startUpdates();
  }

  updateStat(section: string, stat: string){
    this.player.stats[section][stat]++;
    this.availableStats--;
  }

}
