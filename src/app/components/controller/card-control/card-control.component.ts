import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOption } from "@ng-select/ng-select";
import { FormsModule } from '@angular/forms';
import { log } from 'util';
import { Ship } from '../../../models/Stream';


@Component({
  selector: 'app-card-control',
  templateUrl: './card-control.component.html',
  styleUrls: ['./card-control.component.css']
})
export class CardControlComponent implements OnInit {
  @Input() cards:string[];
  @Input() ship:Ship;
  @Output() updatedCards = new EventEmitter<string[]>();
  @Output() updatedDial = new EventEmitter<Ship>();

  myOptions: Array<NgOption> = [];

  manifest:any;

  pilotdata:any;
  shipdata:any;
  upgradedata:any;
  damagedeckdata:any;
  damagedecktfadata:any;
  conditiondata:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let shipFileList: Array<any> = [];
    let upgradeFileList: Array<any> = [];
    let conditionFileList: Array<any> = [];

    let tempPilotOptions: Array<NgOption> = [];
    let tempUpgradeOptions: Array<NgOption> = [];
    let tempDamageDeck: Array<NgOption> = [];
    let tempDamageDeckTFA: Array<NgOption> = [];
    let tempConditionOptions: Array<NgOption> = [];

    const cardImagesPath:String = "/assets/cards";

    //load in xwing-data2 manifest
    this.http.get('assets/plugins/xwing-data2/data/manifest.json').subscribe(data => {
      this.manifest = data;
      

      //index ship files for each faction
      this.manifest.pilots.map(faction => {
          faction.ships.map(shipFilePath => {
            //fixes path
            //let re = /^(data)(.+)/;
            let fixedPath = 'assets/plugins/xwing-data2/'+shipFilePath;
            shipFileList.push(fixedPath);
          });
      });

      //read each ship file and add data for each pilot
      shipFileList.map(shipFile => {
        this.http.get(shipFile).subscribe(data => {
          this.pilotdata = data;
          this.pilotdata.pilots.map(p => {
            //if(p.image !== undefined){
              this.myOptions = this.myOptions.concat({
                label: 'Pilot: '+p.name+'('+this.pilotdata.name+')',
                value: (cardImagesPath+"/pilots/"+p.xws+".png")
              });
            //}
          });
        });
      });//end ship/pilot load



      //index upgrade files for each type
      this.manifest.upgrades.map(upgrade => {
        //fixes path
        //let re = /^(data)(.+)/;
        let fixedPath = 'assets/plugins/xwing-data2/'+upgrade;
        upgradeFileList.push(fixedPath);
      });

      //read each upgrade file and add data for each upgrade
      upgradeFileList.map(upgradeFile => {
        this.http.get(upgradeFile).subscribe(data => {
          this.upgradedata = data;
          //console.log(this.upgradedata);
          
          this.upgradedata.map(upgrade => {
            if(upgrade.sides !== undefined){
              upgrade.sides.map(side => {
                if(this.myOptions.some(function(el){ return el.value === cardImagesPath+"/upgrades/"+upgrade.xws+".png"})){
                  this.myOptions = this.myOptions.concat({
                    label: 'Upgrade: '+side.title+' ('+side.type+')',
                    value: (cardImagesPath+"/upgrades/"+upgrade.xws+"-sideb.png")
                  });
                }else{
                  this.myOptions = this.myOptions.concat({
                    label: 'Upgrade: '+side.title+' ('+side.type+')',
                    value: (cardImagesPath+"/upgrades/"+upgrade.xws+".png")
                  });
                }
              });
            }
          });

        });
      });//end upgrade load


      //broken because conditions in manifest file are not array???

      // //index condition files
      // this.manifest.conditions.map(condition => {
      //   //fixes path
      //   let re = /^(data)(.+)/;
      //   let fixedPath = condition.replace(re, 'assets/plugins/xwing-data2$2');
      //   conditionFileList.push(fixedPath);
      // });

      // //read each condition file and add data for each condition
      // conditionFileList.map(conditionFile => {
      //   this.http.get(conditionFile).subscribe(data => {
      //     this.conditiondata = data.json();
      //     console.log(this.conditiondata);
          
      //     this.conditiondata.map(condition => {
      //       if(condition.image !== undefined){
      //         this.myOptions = this.myOptions.concat({
      //           label: 'Condition: '+condition.name,
      //           value: condition.image
      //         });
      //       }
      //     });

      //   });
      // });//end condition load
      
      // // sort by name
      // this.myOptions.sort(function(a, b) {
      //   var nameA = a.label.toUpperCase(); // ignore upper and lowercase
      //   var nameB = b.label.toUpperCase(); // ignore upper and lowercase
      //   if (nameA < nameB) {
      //     return -1;
      //   }
      //   if (nameA > nameB) {
      //     return 1;
      //   }
      //   // names must be equal
      //   return 0;
      // });
    });//end load xwing-data2


  }//end init

  updateParent(){
    this.updatedCards.emit(this.cards);
    this.updatedDial.emit(this.ship);
  }

  addCard(option: NgOption){
    if(!this.cards){
      this.cards = new Array<string>();
    }
    if(typeof option != 'undefined'){
      this.cards.push(String(option.value));
      this.ship = null;
      this.updateParent();  
    }
  }

  removeCard(cardName:string){
    let target = this.cards.indexOf(cardName);
    this.cards.splice(target, 1);
    this.updateParent();
  }

  clearAllCards(){
    this.cards = [];
    this.ship = null;
    this.updateParent();
  }

}
