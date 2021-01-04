import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;
  loggedin: boolean;
  loaded: boolean = false;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public af:AngularFireDatabase,
              private router: Router) {
      //// Get auth data, then get firebase user object || null

      this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.loaded = true;
          return this.af.object('/users/'+user.uid).valueChanges()
        } else {
          this.loaded = true;
          return of(null)        
        }
      }));

      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.loggedin = true;
          //console.log(this.loaded);
          
        } else {
          this.loggedin = false;
          //console.log(this.loaded);
        }
      });

  }

  getUserUid(){
    if(this.afAuth.auth.currentUser){
      return this.afAuth.auth.currentUser.uid; 
    }else{
      return null
    }
    
  }
  

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }


  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFireObject<any> = this.af.object('/users/'+user.uid);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        window.location.replace('/');
    });
  }
}