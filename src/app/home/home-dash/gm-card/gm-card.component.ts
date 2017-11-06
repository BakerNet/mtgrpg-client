import { Game } from '../../../shared/game.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gm-card',
  templateUrl: './gm-card.component.html',
  styleUrls: ['./gm-card.component.css']
})
export class GmCardComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
