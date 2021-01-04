import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, timer } from 'rxjs';

import { Timer } from '../../../models/Stream'


@Component({
  selector: 'app-timer-control-slim',
  templateUrl: './timer-control-slim.component.html',
  styleUrls: ['./timer-control-slim.component.css']
})
export class TimerControlSlimComponent implements OnInit {
@Input() timer: Timer = {
  running: false
};
@Output() updatedTimer = new EventEmitter<Timer>();

  constructor() { }

  ngOnInit() {
    let ticker = timer(0,1000);
    ticker.subscribe(t=> {
        if(this.timer.running && !this.timer.paused) this.calcDurationLeft(false);
    });
  }


  padLeft(text:string, padChar:string, size:number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
  }

  timeRemainingDisplay(){
    return this.padLeft(this.timer.minutesRemaining <= 0 ? '0' : this.timer.minutesRemaining.toString(), '0', this.timer.minutesRemaining >= 100 ? 3 : 2) + ':' + this.padLeft(this.timer.secondsRemaining <= 0 ? '0' : this.timer.secondsRemaining.toString(), '0', 2);
  }

  calcTargetTime(withUpdate:boolean) {
    let now = new Date();
    let target = new Date();
    target.setTime(now.getTime() + (this.timer.minutesRemaining * 60000) + (this.timer.secondsRemaining * 1000));
    this.timer.target = target.getTime();

    if(withUpdate) this.updateParent();
  }

  calcDurationLeft(withUpdate:boolean){
    let now = new Date();
    let target = new Date();
    target.setTime(this.timer.target);
    if(now.getTime() > target.getTime()){
      this.timer.minutesRemaining = 0;
      this.timer.secondsRemaining = 0;
      this.updateParent();
    }else{
      this.timer.minutesRemaining = Math.floor((target.getTime() - now.getTime())/60000);
      this.timer.secondsRemaining = Math.floor(((target.getTime() - now.getTime()) % 60000) / 1000);
    }
    if(withUpdate) this.updateParent();
  }

  startTimer(){
    this.resetTimer();
    this.timer.running=true;
    this.calcTargetTime(true)
  }

  pauseTimer(){
    this.timer.paused=true;
    this.calcDurationLeft(true);
  }

  unpauseTimer(){
    this.timer.paused=false;
    this.calcTargetTime(true)
  }

  // setTimerDuration(duration:number){
  //   this.updateParent();
  // }

  setTimerSize(){
    this.updateParent();
  }

  resetTimer(){
    this.timer.running = false;
    this.timer.paused = false;
    this.timer.minutesRemaining = this.timer.duration;
    this.timer.secondsRemaining = 0;
    this.timer.target = null;
    this.updateParent();
  }

  updateParent(){
    this.updatedTimer.emit(this.timer);
  }


}
