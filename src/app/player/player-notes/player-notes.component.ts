import { Player } from '../../shared/player.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-notes',
  templateUrl: './player-notes.component.html',
  styleUrls: ['./player-notes.component.css']
})
export class PlayerNotesComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
