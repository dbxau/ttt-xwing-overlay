import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice-input',
  templateUrl: './dice-input.component.html',
  styleUrls: ['./dice-input.component.css']
})
export class DiceInputComponent implements OnInit {
  @Input() dice: string[];
  @Output() updatedDice = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  updateDice(input:string[]){
    this.dice = Array.from(input);
    this.updatedDice.emit(this.dice);
  }

  focusDice(){
    this.dice = Array.from(this.dice.join('').replace(/f/g, 'h').replace(/e/g, 'd').replace(/3/g, 'h').replace(/8/g, 'd'));
    this.updatedDice.emit(this.dice);
  }

}
