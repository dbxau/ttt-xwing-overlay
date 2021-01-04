import { Component, OnInit, Input } from '@angular/core';
import { Ship } from "../../../models/Stream";

@Component({
  selector: 'app-playback-cards',
  templateUrl: './playback-cards.component.html',
  styleUrls: ['./playback-cards.component.css']
})
export class PlaybackCardsComponent implements OnInit {
  @Input() cards:string[];
  @Input() ship:Ship;
  @Input() size:string;

  constructor() { }

  ngOnInit() {
  }

}
