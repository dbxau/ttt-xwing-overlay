import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StreamService } from '../../../services/stream.service';
import { AuthService } from "../../../core/auth.service";

import { Stream, Options, Player, Ship, Timer } from '../../../models/Stream';





@Component({
  selector: 'app-controller-main',
  templateUrl: './controller-main.component.html',
  styleUrls: ['./controller-main.component.css']
})
export class ControllerMainComponent implements OnInit {
  host: string;
  key: string;
  uid: string;
  allowed: boolean = false;
  stream: Stream = {
    name: '',
    players: [
      {
        dice: []
      },
      {
        dice: []
      }
    ],
    options: {
      dropShadow:true,
      shipIcons:true,
      healthAsIcons:true,
      upgradeIcons:true,
      showTimer:true,
      font:"default",
      showPoints:true,
      showShipPoints:true,
      showDice:true,
      showLogo:true,
      showPS:true,
      showForceCharges:true,
      showUpgradeCharges:true,
      textColor:"FFFFFF",
      shipNameFontSize:3,
      shipUpgradeFontSize:2,
      shipStatFontSize:3,
      playerNameFontSize:4,
      cardSize:3,
      shipPSLocation:"stats"

    },
    timer: {
      duration:75,
      minutesRemaining:75,
      secondsRemaining:0,
      running:false
    }
  };
  showStreamNameEditInput:boolean = false;

  constructor(
    public streamService:StreamService,
    public router:Router,
    public route:ActivatedRoute,
    public auth:AuthService
  ) { }

  ngOnInit() {
    document.body.classList.add('bg-secondary');
    this.host = window.location.hostname;
    //get key
    this.key = this.route.snapshot.params['id'];
    //get stream
    this.streamService.getStream(this.key).valueChanges().subscribe(stream => {
      this.stream = stream;
      if (typeof this.stream.players[0].ships === 'undefined') {
        this.stream.players[0].ships = [];
      }
      if (typeof this.stream.players[1].ships === 'undefined') {
        this.stream.players[1].ships = [];
      }
      if (typeof this.stream.players[0].dice === 'undefined') {
        this.stream.players[0].dice = [];
      }
      if (typeof this.stream.players[1].dice === 'undefined') {
        this.stream.players[1].dice = [];
      }
      
      if (typeof this.stream.options.showForceCharges === 'undefined') {
        this.stream.options.showForceCharges = true;
      }
      if (typeof this.stream.options.showUpgradeCharges === 'undefined') {
        this.stream.options.showUpgradeCharges = true;
      }
      
      if (typeof this.stream.options.shipDestroyedStrikethrough === 'undefined') {
        this.stream.options.shipDestroyedStrikethrough = true;
      }
      if (typeof this.stream.options.shipDestroyedOpacity === 'undefined') {
        this.stream.options.shipDestroyedOpacity = 0.5;
      }

      this.uid = this.auth.getUserUid();
      if (this.uid == this.stream.user){
        this.allowed = true;
      }else{
        this.allowed = false;
      }
    });
  }

  
  updateStreamFont(){
    this.updateStreamToParent();
  }

  updateStreamShipPSLocation(){
    this.updateStreamToParent();
  }

  updateStreamScenarioName(){
    this.updateStreamToParent();
  }

  setShipFontSize(){
    this.updateStreamToParent();
  }

  setPlayerNameFontSize(){
    this.updateStreamToParent();
  }

  setTurnTrackerFontSize(){
    this.updateStreamToParent();
  }
  
  setTurnNumberMax(){
    this.updateStreamToParent();
  }

  setScenarioFontSize(){
    this.updateStreamToParent();
  }

  setScenarioYAdjustment(){
    this.updateStreamToParent();
  }

  setTimerSize(){
    this.updateStreamToParent();
  }

  setCardSize(){
    this.updateStreamToParent();
  }

  setMaxPoints(){
    this.updateStreamToParent();
  }
  
  handleColorChange(color:string){
    this.stream.options.textColor = color;
    this.updateStreamToParent();
  }
  
  updateStreamName(){
    this.showStreamNameEditInput = false;
    this.updateStreamToParent();
  }

  swapSides(){
    [this.stream.players[0], this.stream.players[1]] = [this.stream.players[1], this.stream.players[0]];
    this.updateStreamToParent();
  }

  updatePlayer(updatedPlayer:Player, index:number) {
    this.stream.players[index] = updatedPlayer;
    this.updateStreamToParent();
  }

  updateXws(updatedXws:string, index:number) {
    this.stream.players[index].xws = updatedXws;
    this.updateStreamToParent();
  }

  updateDice(updatedDice:string[], index:number) {
    this.stream.players[index].dice = updatedDice;
    this.updateStreamToParent();
  }

  clearDice() {
    this.stream.players[0].dice = [];
    this.stream.players[1].dice = [];
    this.updateStreamToParent();
  }

  updateShips(updatedShips:Ship[], index:number) {
    this.stream.players[index].ships = updatedShips;
    this.updateStreamToParent();
  }

  updateCards(updatedCards:string[]) {
    this.stream.cards = updatedCards;
    this.updateStreamToParent();
  }

  debugCardOutput(){
    console.log(this.stream.cards);
    
  }

  toggleOption(option:string) {
    this.stream.options[option] = !this.stream.options[option];
    this.updateStreamToParent();
  }

  updateDial(updatedDial:Ship) {
    this.stream.dial = updatedDial;
    this.updateStreamToParent();
  }

  updateStreamTimer(updatedTimer:Timer) {
    this.stream.timer = updatedTimer;
    this.updateStreamToParent();
  }

  updateStreamOptions(updatedOptions:Options) {
    this.stream.options = updatedOptions;
    this.updateStreamToParent();
  }

  updateStream(updatedStream:Stream) {
    this.stream = updatedStream;
    this.updateStreamToParent();
  }

  updateStreamToParent(){
    console.log('Updating Stream to Server');
    this.streamService.updateStream(this.stream, this.key);
  }

}
