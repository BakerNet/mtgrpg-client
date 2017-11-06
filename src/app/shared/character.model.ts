import { Item } from './item.model';
export class Character {
    head: Item;
    body: Item;
    boots: Item;
    mainhand: Item;
    offhand: Item;
    trinket: Item;

    constructor(equipped: Object){
        this.head = (equipped['head']) ? new Item(equipped['head']) : new Item({});
        this.body = (equipped['body']) ? new Item(equipped['body']) : new Item({});
        this.boots = (equipped['boots']) ? new Item(equipped['boots']) : new Item({});
        this.mainhand = (equipped['mainhand']) ? new Item(equipped['mainhand']) : new Item({});
        this.offhand = (equipped['offhand']) ? new Item(equipped['offhand']) : new Item({});
        this.trinket = (equipped['Item']) ? new Item(equipped['Item']) : new Item({});
    }

    getStats(){
        var stats = Object.getOwnPropertyNames(this).reduce(
            (total, key) => {
                this[key].stats.forEach(
                    (stat) => {
                        switch (stat.name){
                            case 'vitality': total.primary.vitality = stat.value;
                            case 'strength': total.primary.strength = stat.value;
                            case 'agility': total.primary.agility = stat.value;
                            case 'intelligence': total.primary.intelligence = stat.value;
                            case 'charm': total.secondary.charm = stat.value;
                            case 'bravery': total.secondary.bravery = stat.value;
                            case 'perception': total.secondary.perception = stat.value;
                            case 'wisdom': total.secondary.wisdom = stat.value;
                        }
                    }
                )
                return total;
            }, {
                primary:{
                    vitality: 0,
                    strength: 0,
                    agility: 0,
                    intelligence: 0
                },
                secondary: {
                    charm: 0,
                    bravery: 0,
                    perception: 0,
                    wisdom: 0
                }
            }
        )
        return stats
    }

    getAbilities(){

    }

    getEffects(){

    }
}