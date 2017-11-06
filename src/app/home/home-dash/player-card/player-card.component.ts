import { Player } from '../../../shared/player.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
