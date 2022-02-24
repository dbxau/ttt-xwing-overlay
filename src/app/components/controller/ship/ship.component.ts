import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ship, Upgrade } from '../../../models/Stream';


@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {
  @Input() ship: Ship;
  @Output() updatedShip = new EventEmitter<Ship>();
  editShipName:boolean = false;

  critList = [
    "Blinded Pilot",
    "Console Fire",
    "Damaged Engine",
    "Damaged Sensor Array",
    "Direct Hit!",
    "Disabled Power Regulator",
    "Fuel Leak",
    "Hull Breach",
    "Loose Stabilizer",
    "Panicked Pilot",
    "Structural Damage",
    "Stunned Pilot",
    "Weapons Failure",
    "Wounded Pilot",
  ];

  constructor() { }

  ngOnInit() {
  }

  decrement(target:string){
    switch (target) {
      case 'hull':
        if(this.ship.hull > 0) {
          this.ship.hull--;
          if(this.ship.hull == 0){
            this.ship.enabled = false;
          }
        }
        break;
      case 'shields':
        if(this.ship.shields > 0) this.ship.shields--;
        break;
      case 'skill':
        if(this.ship.pilotskill > 0) this.ship.pilotskill--;
        break;
      case 'force':
        if(this.ship.force > 0) this.ship.force--;
        break;
      default:
        break;
    }
    this.updateParent();
  }

  increment(target:string){
    switch (target) {
      case 'hull':
        this.ship.hull++;
        break;
      case 'shields':
        this.ship.shields++;
        break;
      case 'skill':
        this.ship.pilotskill++;
        break;
      case 'force':
        this.ship.force++;
        break;
      default:
        break;
    }
    this.updateParent();
  }

  toggleUpgrade(upgrade:Upgrade){
    upgrade.enabled=!upgrade.enabled;
    this.updateParent();
  }

  updateUpgrade(upgrade:Upgrade, i:number){
    this.ship.upgrades[i] = upgrade;
    this.updateParent();
  }

  updateParent(){
    this.updatedShip.emit(this.ship);
  }

  handleColorChange(color:string){
    this.ship.color = color;
    this.updateParent();
  }

  handleShipNameClick(){
    this.ship.enabled = !this.ship.enabled;
    this.updateParent();
  }

  handleShipNameEdit(){
    this.editShipName = false;
    this.updateParent();
  }

  hasLostHalfPointsReset(){
    this.ship.hasLostHalfPoints = false;
    this.updateParent();
  }

  addCrit(critName:string){
    if(!this.ship.hasOwnProperty('crits')){
      this.ship.crits = new Array<string>();
    }
    this.ship.crits.push(critName);
    this.updateParent();
    
  }

  removeCrit(critName:string){
    let target = this.ship.crits.indexOf(critName);
    this.ship.crits.splice(target, 1);
    this.updateParent();
  }

  getUpgradeIcon(upgrade){
    switch (upgrade) {
      case "configuration":
        return "config";
    
      default:
        return upgrade;
    }
  }


  getShipIcon(ship){
    switch (ship) {
      case "scavengedyt1300":
        return "modifiedyt1300lightfreighter";
      case "tieininterceptor":
        return "tieinterceptor";
      case "upsilonclassshuttle":
        return "upsilonclasscommandshuttle";
      default:
        return ship;
    }
  }

  halfPoints(){
    return Math.ceil(this.ship.points/2);
  }
}
