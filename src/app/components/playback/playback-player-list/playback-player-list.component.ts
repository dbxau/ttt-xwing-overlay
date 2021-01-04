import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../models/Stream';

@Component({
  selector: 'app-playback-player-list',
  templateUrl: './playback-player-list.component.html',
  styleUrls: ['./playback-player-list.component.css']
})
export class PlaybackPlayerListComponent implements OnInit {
@Input() player:Player;
@Input() isRight:boolean = false;
@Input() options:string[];

  constructor() { }

  ngOnInit() {
  }

}
