import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { timer } from 'rxjs';

import { Timer } from '../../../models/Stream'

@Component({
  selector: 'app-playback-timer',
  templateUrl: './playback-timer.component.html',
  styleUrls: ['./playback-timer.component.css']
})
export class PlaybackTimerComponent implements OnInit, OnChanges {
  @Input() timer: Timer= {
    running: false,
    paused: false,
    minutesRemaining: 0,
    secondsRemaining: 0,
    size: 3
  };

  @Input() size: number = 3;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    let ticker = timer(0,1000);
    ticker.subscribe(t=> {
        if(this.timer.running && !this.timer.paused) this.calcDurationLeft(false);
    });
  }

  padLeft(text:string, padChar:string, size:number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
  }

  timerWidth(time:string, size:number){
    if(time==":"){
      return 0.3;
    }else{
      return 1.1;
    }
  }

  timeRemainingDisplay(){
    let time = this.padLeft(this.timer.minutesRemaining <= 0 ? '0' : this.timer.minutesRemaining.toString(), '0', this.timer.minutesRemaining >= 100 ? 3 : 2) + ':' + this.padLeft(this.timer.secondsRemaining <= 0 ? '0' : this.timer.secondsRemaining.toString(), '0', 2);
    return [...time];
  }

  calcDurationLeft(withUpdate:boolean){
    let now = new Date();
    let target = new Date();
    target.setTime(this.timer.target);
    if(now.getTime() > target.getTime()){
      this.timer.minutesRemaining = 0;
      this.timer.secondsRemaining = 0;
    }else{
      this.timer.minutesRemaining = Math.floor((target.getTime() - now.getTime())/60000);
      this.timer.secondsRemaining = Math.floor(((target.getTime() - now.getTime()) % 60000) / 1000);
    }
  }

}
