import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from '../../../models/Stream';

@Component({
  selector: 'app-turn-tracker-control-slim',
  templateUrl: './turn-tracker-control-slim.component.html',
  styleUrls: ['./turn-tracker-control-slim.component.css']
})
export class TurnTrackerControlSlimComponent implements OnInit {
@Input() options:Options;
@Output() updatedOptions = new EventEmitter<Options>();

  constructor() { }

  ngOnInit() {
    console.log(this.options)
  }

  incrementTurnNumber(){
    if(this.options.turnNumber<this.options.turnNumberMax){
      this.options.turnNumber++;
      this.updateParent();
    }
  }

  decrementTurnNumber(){
    if(this.options.turnNumber>0){
      this.options.turnNumber--;
      this.updateParent();
    }
  }

  updateParent(){
    this.updatedOptions.emit(this.options);
  }
}
