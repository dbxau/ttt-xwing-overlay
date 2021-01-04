import { Component, OnInit, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-dial-maneuver',
  templateUrl: './dial-maneuver.component.html',
  styleUrls: ['./dial-maneuver.component.css']
})
export class DialManeuverComponent implements OnInit {
  @Input() speed:number;
  @Input() move:string;
  @Input() difficulty:string;
  
  constructor() { }

  ngOnInit() {
  }
}
