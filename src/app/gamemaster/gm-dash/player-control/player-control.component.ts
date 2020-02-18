import { Subscription } from 'rxjs';
import { Item } from '../../../shared/item.model';
import { PlayGameService } from '../../../shared/play-game.service';
import { Player } from '../../../shared/player.model';
import { Compiler, Component, Injector, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.css']
})
export class PlayerControlComponent implements OnInit {
  @Input() player: Player;
  itemTemplates: Array<Item>;
  playerUpdates: Subscription
  JSON;

  constructor(private play: PlayGameService) { 
    this.JSON = JSON;
  }

  ngOnInit() {
    this.play.getItemTemplates()
      .then(
        items => this.itemTemplates = items as Array<Item>
      )
    this.startUpdates();
  }

  ngOnDestroy(){
    this.playerUpdates.unsubscribe();
  }

  pauseUpdates(){
    this.playerUpdates.unsubscribe();
  }

  startUpdates(){
    this.playerUpdates = this.play.getPlayerUpdates(this.player)
    .subscribe(
      player => {
        this.player = player
      }
    )
  }

  onAddXP(amount: number){
    alert("XP added: " + amount);
    this.startUpdates();
  }

  onAddItem(item: string){
    alert("Item added: " + item);
    this.startUpdates();
  }

}
