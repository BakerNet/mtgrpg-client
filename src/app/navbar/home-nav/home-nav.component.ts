import { PlayGameService } from '../../shared/play-game.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  @Input() mode: string;

  constructor(private play: PlayGameService) { }

  ngOnInit() {
  }

}
