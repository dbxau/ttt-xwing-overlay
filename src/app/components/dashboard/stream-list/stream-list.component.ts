import { Component, OnInit } from '@angular/core';
import { StreamService } from "../../../services/stream.service";
import { Stream } from "../../../models/Stream";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css']
})
export class StreamListComponent implements OnInit {
  streams:Stream[];

  constructor(public streamService:StreamService) { }

  ngOnInit() {
    this.streamService.getStreams().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(streams => {
      this.streams = streams;
      //console.log(this.streams);
    });
  }


  onDeleteClick(key:string) {
    if(confirm("Are you sure you want to delete this saved Stream?")) {
      this.streamService.deleteStream(key);
    } 
  }

}
