import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamService } from '../../../services/stream.service';
import { Stream } from "../../../models/Stream";

import { AuthService } from '../../../core/auth.service'


@Component({
  selector: 'app-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css']
})
export class AddStreamComponent implements OnInit {
  newStream: Stream = {
    name: 'New Stream',
    players: [
      {
        name: 'Player 1',
        subText: 'Subtitle',
        pointsLost: 0
      },
      {
        name: 'Player 2',
        subText: 'Subtitle',
        pointsLost: 0
      }
    ],
    options: {
      dropShadow:true,
      shipIcons:true,
      upgradeIcons:true,
      showTimer:true,
      showPoints:true,
      showDice:true,
      showCards:true,
      showLogo:true,
      showPS:true,
      showSubText:true,
      showForceCharges:true,
      showUpgradeCharges:true,
      showShipPoints:true,
      healthAsIcons:false,
      playerNameFontSize: 2.5,
      shipNameFontSize: 1.25,
      shipStatFontSize: 1.5,
      shipUpgradeFontSize: 1,
      cardSize: 3,
      font: 'default',
      textColor: '#ffffff',
      shipPSLocation:"icon",
      shipDestroyedStrikethrough: false,
      shipDestroyedOpacity: 0.5,

    },
    timer: {
      duration:75,
      minutesRemaining:75,
      secondsRemaining:0,
      running:false,
      size:3
    }
  }

  newStreamClick() {
    this.newStream.user = this.auth.getUserUid();
    let now = new Date;
    this.newStream.name = "New Stream - " + now.toISOString();
    let newStreamKey = this.streamService.createNewStream(this.newStream);
    this.router.navigate(['/stream/'+newStreamKey]);
  }

  constructor(
    public streamService:StreamService,
    public router:Router,
    public auth: AuthService
  ) { }

  ngOnInit() {    
  }

}
