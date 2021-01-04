import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playback-dice-vertical',
  templateUrl: './playback-dice-vertical.component.html',
  styleUrls: ['./playback-dice-vertical.component.css']
})
export class PlaybackDiceVerticalComponent implements OnInit {
  @Input() dice: string[];
  constructor() { }

  ngOnInit() {
  }

}
