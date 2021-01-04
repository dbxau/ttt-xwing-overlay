import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from "rxjs";
import { Stream } from "../models/Stream";
import { AuthService } from '../core/auth.service';


@Injectable()
export class StreamService {
  streams: AngularFireList<any>;
  stream: AngularFireObject<any>;
  
  constructor(public af:AngularFireDatabase, public auth:AuthService) {
      this.streams = af.list('/streams', ref => ref.orderByChild('user').equalTo(this.auth.getUserUid()));
   }

  getStreams():AngularFireList<any[]> {
    return this.streams;
  }


  getStream(key:string) {
    this.stream = this.af.object('/streams/'+key) as AngularFireObject<Stream>;
    return this.stream;
  }
  
  deleteStream(key:string) {
    return this.streams.remove(key);
  }

  createNewStream(newStream:Stream) {
    let newStreamRef = this.streams.push(newStream);
    return newStreamRef.key;
  }

  updateStream(updatedStream:Stream, key:string){
    return this.streams.update(key, updatedStream);
  }

}
