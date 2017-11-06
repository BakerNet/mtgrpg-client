import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-nav',
  templateUrl: './game-nav.component.html',
  styleUrls: ['./game-nav.component.css']
})
export class GameNavComponent implements OnInit {
  @Input() mode: string;

  constructor() { }

  ngOnInit() {
  }

}
