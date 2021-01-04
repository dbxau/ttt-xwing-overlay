import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { StreamService } from '../../../services/stream.service';
import { Player, Ship, Upgrade } from '../../../models/Stream'
import { log } from 'util';

declare var $:any;
declare var xws: any;

declare var require: any;

import * as manifest from 'assets/plugins/xwing-data2/data/manifest.json';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  @Input() player: Player;
  @Input() points: number;
  @Output() updatedPlayer = new EventEmitter<Player>();
  @Output() updatedCards = new EventEmitter<String[]>();
  @Output() updatedDial = new EventEmitter<Ship>();

  pilots:any;
  pilotdata:any;
  shipdata:any;
  factiondata:any;
  upgrades:any;
  upgradedata:any;
  editXWS:boolean = false;
  showPlayerNameEditInput:boolean = false;
  showPlayerSubTextEditInput:boolean = false;
  xwsErrorDisplay:string;
  cards:string[];
  



  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {         
    this.upgradedata = [];
    this.pilotdata = [];
    this.factiondata = [];

    manifest['upgrades'].forEach(upgrade => {
      this.upgradedata[upgrade.replace("data/upgrades/", "").replace(".json", "")] = require('assets/plugins/xwing-data2/'+upgrade);
    });

    manifest['pilots'].forEach(pilots => {
      this.pilotdata[pilots.faction] = [];
      pilots.ships.forEach(ship => {
        var temp = require('assets/plugins/xwing-data2/'+ship);  
        this.pilotdata[pilots.faction][temp['xws']] = temp;
        temp['pilots'].forEach(pilot => {
          this.pilotdata[pilots.faction][temp['xws']]['pilots'][pilot['xws']] = pilot;
        });
      });
    });

    this.factiondata = require('assets/plugins/xwing-data2/data/factions/factions.json');

  }

  updateParent(){
    this.updatedPlayer.emit(this.player);
  }

  togglePlayerInitiative() {
    this.player.hasInitiative = !this.player.hasInitiative;
    this.updateParent();
  }

  updatePlayerName(){
    this.showPlayerNameEditInput = false;
    this.updateParent();
  }

  updatePlayerSubText(){
    this.showPlayerSubTextEditInput = false;
    this.updateParent();
  }

  updateShip(ship:Ship, i:number){
    this.player.ships[i] = ship;
    this.calcPointsLost(); 
    //this.updateParent();
  }

  moveShipUp(i:number){
    [this.player.ships[i], this.player.ships[i-1]] =  [this.player.ships[i-1], this.player.ships[i]];
    this.updateParent();
  }

  moveShipDown(i:number){
    [this.player.ships[i], this.player.ships[i+1]] =  [this.player.ships[i+1], this.player.ships[i]];
    this.updateParent();
  }

  updateCards(ship:Ship){
    this.cards = [];
    this.cards.push(ship.pilot.image);
    if(ship.upgrades){
      ship.upgrades.forEach(u => {
        this.cards.push(u.image);
      });
    }
    this.updatedCards.emit(this.cards);
    this.updatedDial.emit(null);
  }

  updateDial(ship:Ship){
    this.cards = [];
    this.updatedCards.emit(this.cards);
    this.updatedDial.emit(ship);
  }


  calcPointsLost(){
    let runningTotal:number = 0;
    for (let ship of this.player.ships){
      if(!ship.enabled) {
        runningTotal += ship.points;
      }else if((ship.hull+ship.shields) <= Math.floor((ship.starthull+ship.startshields)/2)){
        runningTotal += Math.ceil(ship.points/2);
      }
    }
    this.player.pointsLost = runningTotal;
    this.updateParent();
  }

  pointsToLead(){
    if(this.player.pointsLost<this.points){
      return 'Leading by ' + (this.points-this.player.pointsLost);
    }else{
      return 'Needs '+(this.player.pointsLost-this.points+1)+' to lead';
    }
  }

  listPoints(){
    if(this.player.listPoints){
      return this.player.listPoints;
    }else{
      return "-";
    }
  }


  buildShipList(xws:string){
      const x = JSON.parse(xws);
      const faction = x.faction;
      this.player.faction = faction;
      if(faction){
        let singleFactionData = this.factiondata.find(f => f.xws === faction); 
        this.player.subText = singleFactionData.name;
      }
      this.player.ships = [];

      try {
        for (let pilot of x.pilots) {
          //caters for mismatch between external xws and xwing-data2
          switch (pilot.ship) {
            case "scavengedyt1300lightfreighter":
              pilot.ship = "scavengedyt1300";
              break;
            case "mg100starfortresssf17":
              pilot.ship = "mg100starfortress";
              break;
            case "tieinterceptor":
              pilot.ship = "tieininterceptor";
              break;
            case "upsilonclasscommandshuttle":
              pilot.ship = "upsilonclassshuttle";
              break;
            default:
              break;
          }

          switch (pilot.id) {
            case "dineeellberger-nabooroyaln1starfighter":
              pilot.id = "dineeellberger";
              break;
            case "ricolie-nabooroyaln1starfighter":
              pilot.id = "ricolie";
              break;
            case "padmeamidala-nabooroyaln1starfighter":
              pilot.id = "padmeamidala";
              break;
            case "anakinskywalkerywing":
              pilot.id = "anakinskywalker-btlbywing";
              break;
            case "oddballywing":
              pilot.id = "oddball-btlbywing";
            case "alexsandrkallus":
              pilot.id = "alexandrkallus";
              break;
            default:
              break;
          }

          const shipName = pilot.ship;

            let data = this.pilotdata[faction][shipName];
          
            const singleShipData = data;

            //console.log(pilot);
            
            const singlePilotData = data.pilots[pilot.id];

            //console.log(singlePilotData);
            
            if(singlePilotData) {            
              let newShip:Ship = {
                name: singleShipData.name,
                pilot: singlePilotData,
                pilotskill: singlePilotData.initiative,
                points: (pilot.points != null) ? pilot.points : 0,
                hull: singleShipData.stats.find(element=>{ if (element.type === "hull") return element; }).value,
                shields: (singleShipData.stats.find(element=>{ if (element.type === "shields") return element; }) === undefined ? 0 : singleShipData.stats.find(element=>{ if (element.type === "shields") return element; }).value),
                upgrades: [],
                color: "#FFFFFF",
                xws: shipName,
                enabled:true,
                base: singleShipData.size,
                crits: new Array<string>(),
                faction: singleShipData.faction,
                dial: singleShipData.dial
              }

              if(singlePilotData.force !== undefined) {
                newShip.force = singlePilotData.force.value
              }

              //iterate upgrade types
              for(let upgradeType in pilot.upgrades) {
                // Caters for "mod"->"modification" mapping
                let upgradeTypeFixed = upgradeType;
                switch (upgradeType) {
                  case "mod":
                    upgradeTypeFixed = "modification";
                    break;
                  case "amd":
                    upgradeTypeFixed = "astromech";
                    break;
                  case "ept":
                    upgradeTypeFixed = "talent";
                    break;
                  case "force":
                  case "forcepower":
                    upgradeTypeFixed = "force-power";
                    break;
                  case "tacticalrelay":
                    upgradeTypeFixed = "tactical-relay";
                    break;
                  default:
                    break;
                }

                //iterate upgrades in type
                for(let upgradeName in pilot.upgrades[upgradeType]) {
                  
                  //fix for phantom title
                  let upgradeNameFixed = pilot.upgrades[upgradeType][upgradeName];

                  switch (upgradeTypeFixed) {
                    case "title":
                      switch (upgradeNameFixed) {
                        case "phantomsheathipede":
                          upgradeNameFixed = "phantom";
                          break;
                      }
                    case "crew":
                        switch (upgradeNameFixed) {
                          case "leiaorganaresistance":
                            upgradeNameFixed = "leiaorgana-resistance";
                            break;
                          case "k2s0":
                            upgradeNameFixed = "k2so";
                            break;                        }
                  }
                                  
                  if(upgradeTypeFixed !== "hardpoint"){
                    let upgrade = this.upgradedata[upgradeTypeFixed].find(u => u.xws === upgradeNameFixed);               
                    let newUpgrade:Upgrade = {
                      name: upgrade.name, 
                      enabled: true, 
                      points: 0, 
                      type:upgrade.sides[0].type, 
                      xws:upgrade.xws,
                    }
                    if(upgrade.sides[0].image !== undefined){
                      newUpgrade.image = upgrade.sides[0].image;
                    }else{
                      newUpgrade.image = "";
                    }
                    if(upgrade.sides[0].charges !== undefined){
                      newUpgrade.charges = upgrade.sides[0].charges.value;
                    }
                                        
                    if(upgrade.sides[0].grants !== undefined) {
                      for(let grant of upgrade.sides[0].grants) {
                        //console.log(grant);
                        //console.log(grant['type']);
                        if(grant['type'] == 'stat'){
                          switch (grant['value']) {
                            case 'hull':
                              //console.log('grants hull');
                              newShip.hull = newShip.hull + grant['amount'];
                              break;
                            case 'shields':
                              //console.log('grants shields');
                              newShip.shields = newShip.shields + grant['amount'];
                              break;
                            default:
                              break;
                          }
                        }         
                      }
                    }
                    newShip.upgrades.push(newUpgrade);
                  }
                }
              };
              newShip.starthull = newShip.hull;
              newShip.startshields = newShip.shields;
              console.log(newShip);
              
              this.player.ships.push(newShip);
              this.calcPointsLost(); 
              this.updateParent();
          } 
        }
      }
      catch(e){
        this.xwsErrorDisplay = e;
      } 
      
      if(x.points){
        this.player.listPoints = x.points;
      }
  }

  onSubmitXws({value, valid}){
    try {
      this.player.xws = value.xws;
      this.editXWS = false;
      this.buildShipList(this.player.xws);
      this.updateParent();
    }
    catch (e) {
      this.xwsErrorDisplay = "Error Loading XWS";
    }
  }

  cancelXWSEdit(){
    this.editXWS = false;
  }

  closeXwsErrorDisplay(){
    this.xwsErrorDisplay = null;
  }

  debugListOutput(){
    console.log(this.player);
  }

}
