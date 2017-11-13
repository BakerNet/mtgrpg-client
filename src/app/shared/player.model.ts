import { Character } from './character.model';
import { Item } from './item.model';

interface Stats {
    primary: {
        vitality: number,
        strength: number,
        agility: number,
        intelligence: number
    },
    secondary: {
        charm: number,
        bravery: number,
        perception: number,
        wisdom: number
    }
}

export class Player {
    game: string;
    userID: string;
    index: number;
    name: string;
    level: number;
    currXP: number;
    age: number;
    gender: string;
    race: string;
    inventory: Array<Item>;
    equipped: Character;
    stats: Stats;
    abilities: Array<{name: string, description: string}>;
    effects: Array<{name: string, description: string}>;
    personality: Array<{category: string, name: string}>;
    notes: string;

    constructor(player: Object, game: string, userID: string, index: number){
        this.game = game;
        this.userID = userID;
        this.index = index;
        this.name = player['name'];
        this.level = player['level'] || 1;
        this.currXP = player['currXP'];
        this.gender = player['gender'];
        this.age = player['age'];
        this.race = player['race'];
        this.inventory = player['inventory'] || new Array();
        this.equipped = (player['equipped']) ? new Character(player['equipped']) : new Character({});
        this.stats = this.getStats(player);
        this.abilities = player['abilities'] || new Array();
        this.effects = player['effects'] || new Array();
        this.personality = player['personality'] || new Array();
        this.notes = player['notes'];
    }
    
    getStats(player: Object): Stats {
        let stats = {
            primary: {
                vitality: player['vitality'],
                strength: player['strength'],
                agility: player['agility'],
                intelligence: player['intelligence']
            },
            secondary: {
                charm: player['charm'],
                bravery: player['bravery'],
                perception: player['perception'],
                wisdom: player['wisdom']
            }
        }
        return stats;
    }

    getMaxHP(){
        return this.stats.primary.vitality;
    }
}