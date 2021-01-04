import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StreamService } from '../../../services/stream.service';
import { Stream } from '../../../models/Stream';

@Component({
  selector: 'app-playback-timer-standalone',
  templateUrl: './playback-timer-standalone.component.html',
  styleUrls: ['./playback-timer-standalone.component.css']
})
export class PlaybackTimerStandaloneComponent implements OnInit {
  key: string;
  stream: Stream = {
    name: '',
    players:[
      {
        name: ''
      },
      {
        name: ''
      }
    ],
    options:
      {
        dropShadow:true,
        shipIcons:true,
        showTimer:true
      },
      timer: {
        duration:75,
        minutesRemaining:75,
        secondsRemaining:0,
        running:false
      }
  };
  constructor(
    public streamService:StreamService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
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
        });
  }

}
