import { Component, OnInit, Input } from '@angular/core';
import { Player, Options } from '../../../models/Stream';


@Component({
  selector: 'app-playback-player-name',
  templateUrl: './playback-player-name.component.html',
  styleUrls: ['./playback-player-name.component.css']
})
export class PlaybackPlayerNameComponent implements OnInit {
  @Input() player:Player;
  @Input() options:Options;
  @Input() isRight:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
