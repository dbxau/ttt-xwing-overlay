import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Upgrade } from '../../../models/Stream';

@Component({
  selector: 'app-ship-upgrade',
  templateUrl: './ship-upgrade.component.html',
  styleUrls: ['./ship-upgrade.component.css']
})
export class ShipUpgradeComponent implements OnInit {
  @Input() upgrade: Upgrade;
  @Output() updatedUpgrade = new EventEmitter<Upgrade>();

  constructor() { }

  ngOnInit() {
  }

  updateParent(){
    this.updatedUpgrade.emit(this.upgrade);
  }

  toggleUpgrade(){
    this.upgrade.enabled=!this.upgrade.enabled;
    this.updateParent();
  }

  decrement(){
    if(this.upgrade.charges > 0) {
      this.upgrade.charges--;
    }
    this.updateParent();
  }

  increment(){
    this.upgrade.charges++;
    this.updateParent();
  }

  getUpgradeIcon(upgrade:String){
    switch (upgrade) {
      case "configuration":
        return "config";
      case "ept":
        return "talent";
      case "force power":
        return "forcepower";
      case "tactical relay":
        return "tacticalrelay";   
      default:
        return upgrade;
    }
  }

}
