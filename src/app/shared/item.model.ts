export class Item {
    reqLvl: number;
    reqStats: Array<{name: string, value: number}>
    stats: Array<{name: string, value: number}>
    abilities: Array<{name: string, description: string}>
    effects: Array<{name: string, description: string}>

    constructor(item: Object){
        this.reqLvl = item['reqLvl'];
        this.reqStats = item['reqStats'];
        this.stats = item['stats'] || [];
        this.abilities = item['abilities'] || [];
        this.effects = item['effects'] || [];
    }
}