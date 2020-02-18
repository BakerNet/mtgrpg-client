import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { GameApiService } from '../../shared/game-api.service';
import { Game } from '../../shared/game.model';
import { PlayGameService } from '../../shared/play-game.service';
import { Player } from '../../shared/player.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent implements OnInit {
  user: User;
  myGames: Array<Game>;
  myPlayers: Array<Player>;
  selectedMode: string;
  selectedIndex: number;

  constructor(
    private api: GameApiService, 
    private auth: AuthService, 
    private play: PlayGameService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      (user) => {
        this.user = user;
        this.myGames = this.api.getGameMasterGames(user.name);
        this.myPlayers = this.api.getPlayers(user.name);
      }
    )
    this.play.clearStoredData();
  }

  onGameSelect(i: number){
    this.play.loadGame(this.myGames[i]);
    this.selectedMode = this.play.getMode();
    this.selectedIndex = i;
  }

  onPlayerSelect(i: number){
    this.play.loadPlayer(this.myPlayers[i]);
    this.selectedMode = this.play.getMode();
    this.selectedIndex = i;
    //console.log(this.selectedMode + " " + this.selectedIndex);
  }

}
