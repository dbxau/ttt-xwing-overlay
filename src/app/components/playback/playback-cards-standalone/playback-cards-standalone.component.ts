import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StreamService } from '../../../services/stream.service';
import { Stream } from '../../../models/Stream';


@Component({
  selector: 'app-playback-cards-standalone',
  templateUrl: './playback-cards-standalone.component.html',
  styleUrls: ['./playback-cards-standalone.component.css']
})
export class PlaybackCardsStandaloneComponent implements OnInit {

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
    });
  }

}
