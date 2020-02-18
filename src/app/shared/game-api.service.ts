import { ObservableInput, Observable, interval } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Character } from './character.model';
import { Injectable } from '@angular/core';

import { Game } from './game.model';
import { Player } from './player.model';

var placeholder = new Game("test", "fakename");
var player1 = new Player({
  name: "Hans, the Great",
  age: 26,
  race: "human",
  gender: "male",
  currXP: 200,
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
var player2 = new Player({
  name: "Stig, the Creator",
  age: 25,
  race: "human",
  gender: "male",
  currXP: 500,
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
}, "test", "stig.baker@gmail.com", 1);
placeholder.importPlayers([player1, player2]);
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

  getGameUpdates(game: Game){

  }

  getPlayerUpdates(player: Player){
    return interval(5000)
      .pipe(startWith(0), map(() => {
          if (player.name === player1.name) return player1
          if (player.name === player2.name) return player2
          return null;
      }))
  }

  updateGameData(game: Game){
    placeholder = game;
  }

  updatePlayerData(player: Player){
    player1 = player;
  }

  getItemTemplates(){
    return new Promise(
      (resolve, reject) => {
        resolve([{id: 0, name: "fake item template"}, {id: 1, name: "another template"}]);
      }
    )
  }

  addItemTemplate(){

  }

  isUniqueGame(gameName: string){

  }

}
