import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playback-dice-horizontal',
  templateUrl: './playback-dice-horizontal.component.html',
  styleUrls: ['./playback-dice-horizontal.component.css']
})
export class PlaybackDiceHorizontalComponent implements OnInit {
  @Input() dice: string[];
  constructor() { }

  ngOnInit() {
  }

}