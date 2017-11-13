import { Item } from './item.model';
import { Router } from '@angular/router';
import { Game } from './game.model';
import { Player } from './player.model';
import { GameApiService } from './game-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayGameService {
  private selectedMode: string;
  private selectedGame: Game;
  private selectedPlayer: Player;
  private itemTemplates: Array<any>;

  constructor(private api: GameApiService, private router: Router) { }

  loadPlayer(player: Player){
    this.selectedMode = "player";
    this.selectedPlayer = player;
    this.selectedGame = null;
    localStorage.setItem('selectedPlayer', JSON.stringify(player));
    localStorage.removeItem('selectedGame');
  }

  loadGame(game: Game){
    this.selectedMode = "gamemaster";
    this.selectedGame = game;
    this.selectedPlayer = null;
    localStorage.setItem('selectedGame', JSON.stringify(game));
    localStorage.removeItem('selectedPlayer');
  }

  getMode(){
    return this.selectedMode;
  }

  getSelectedGame(){
    if (this.selectedGame){
      return this.selectedGame
    }
    if (localStorage.getItem('selectedGame')){
      return JSON.parse(localStorage.getItem('selectedGame'))
    }
    this.router.navigate(['/home']);
  }
  
  getSelectedPlayer(){
    if (this.selectedPlayer){
      return this.selectedPlayer
    }
    if (localStorage.getItem('selectedPlayer')){
      return JSON.parse(localStorage.getItem('selectedPlayer'))
    }
    this.router.navigate(['/home']);
  }

  getItemTemplates(){
    return this.api.getItemTemplates()
  }

  clearStoredData(){
    this.selectedMode = null;
    this.selectedPlayer = null;
    localStorage.removeItem('selectedPlayer');
    this.selectedGame = null;
    localStorage.removeItem('selectedGame');
  }

  updatePlayer(player: Player){
    localStorage.setItem('selectedPlayer', JSON.stringify(player));
    this.api.updatePlayerData(player);
  }
  
  updateGame(game: Game){
    localStorage.setItem('selectedPlayer', JSON.stringify(game));
    this.api.updateGameData(game);
  }

  getPlayerUpdates(player: Player){
    return this.api.getPlayerUpdates(player);
  }

  getGameUpdates(game: Game){
    return this.api.getGameUpdates(game);
  }

}
