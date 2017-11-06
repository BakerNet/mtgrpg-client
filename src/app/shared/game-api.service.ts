import { Character } from './character.model';
import { Injectable } from '@angular/core';

import { Game } from './game.model';
import { Player } from './player.model';

var placeholder = new Game("test", "fakename");
var player1 = new Player({
  name: "hans",
  age: 26,
  race: "human",
  inventory: [],
  equipped: new Character({}),
  vitality: 20,
  strength: 19,
  agility: 18,
  intelligence: 17,
  charm: 16,
  bravery: 15,
  perception: 14,
  wisdom: 13,
  abilities: [{name: "ability", description: "fakenews"}],
  effects: [{name: "buff", description: "it helps"}],
  personality: [{category: "Virtues", name: "honest"}],
  notes: `<p>THIS IS A NOTE!  HELLO THERE! <br /> HOW ARE YOU?</p>`
}, "test", "hansbaker90@gmail.com", 0);
placeholder.importPlayers([player1]);
placeholder.importNotes(`<h3>I am a Note!</h3>`);

@Injectable()
export class GameApiService {

  constructor() { }

  ngOnInit(){

  }

  getGameMasterGames(userid: string){
    return [placeholder];
  }

  getPlayers(userid: string){
    return [player1];
  }

  getGameData(name: string){
    return placeholder;
  }

  getPlayerData(game: string, playername: string){
    return player1;
  }

  updateGameData(game: Game){
    placeholder = game;
  }

  updatePlayerData(player: Player){
    player1 = player;
  }

  getItemTemplates(){
    return []
  }

  addItemTemplate(){

  }

  isUniqueGame(gameName: string){

  }

}
