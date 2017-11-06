import { Player } from './player.model';
export class Game {
    name: string;
    gamemaster: string;
    numPlayers: number;
    players: Array<Player>;
    notes: string;

    constructor(name: string, gamemaster: string){
        this.name = name;
        this.gamemaster = gamemaster;
        this.numPlayers = 0;
        this.players = new Array();
        this.notes = "";
    }

    importPlayers(players: Array<Player>){
        this.players = players;
    }

    importNotes(notes: string){
        this.notes = notes;
    }

    updatePlayer(player: Player){
        this.players[player.index] = player;
    }
}