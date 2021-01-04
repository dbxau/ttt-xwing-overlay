import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Fire Imports
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

//Plugin imports
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from "@ng-select/ng-select";

//Routing Module
import { AppRoutingModule } from './app-routing.module';

//Core Module
import { CoreModule } from "./core/core.module";
import { AuthGuard } from "./core/auth.guard";

//Service Imports
import { StreamService } from "./services/stream.service";

//Component Imports
import { AppComponent } from './app.component';
import { DashboardMainComponent } from './components/dashboard/dashboard-main/dashboard-main.component';
import { PlaybackMainComponent } from './components/playback/playback-main/playback-main.component';
import { StreamListComponent } from './components/dashboard/stream-list/stream-list.component';
import { ControllerMainComponent } from './components/controller/controller-main/controller-main.component';
import { AddStreamComponent } from './components/dashboard/add-stream/add-stream.component';
import { PlayerListComponent } from './components/controller/player-list/player-list.component';
import { ShipComponent } from './components/controller/ship/ship.component';
import { PlaybackPlayerNameComponent } from './components/playback/playback-player-name/playback-player-name.component';
import { PlaybackPlayerListComponent } from './components/playback/playback-player-list/playback-player-list.component';
import { PlaybackShipComponent } from './components/playback/playback-ship/playback-ship.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { DiceComponent } from './components/controller/dice/dice.component';
import { DieComponent } from './components/controller/die/die.component';
import { DiceInputComponent } from './components/controller/dice-input/dice-input.component';
import { PlaybackDiceVerticalComponent } from './components/playback/playback-dice-vertical/playback-dice-vertical.component';
import { TimerControlComponent } from './components/controller/timer-control/timer-control.component';
import { TimerControlSlimComponent } from './components/controller/timer-control-slim/timer-control-slim.component';
import { PlaybackTimerComponent } from './components/playback/playback-timer/playback-timer.component';
import { PlaybackTimerStandaloneComponent } from './components/playback/playback-timer-standalone/playback-timer-standalone.component';
import { PlaybackDiceVerticalStandaloneComponent } from './components/playback/playback-dice-vertical-standalone/playback-dice-vertical-standalone.component';
import { PlaybackDiceHorizontalStandaloneComponent } from './components/playback/playback-dice-horizontal-standalone/playback-dice-horizontal-standalone.component';
import { PlaybackDiceHorizontalComponent } from './components/playback/playback-dice-horizontal/playback-dice-horizontal.component';
import { PlaybackLogoComponent } from './components/playback/playback-logo/playback-logo.component';
import { LoginGoogleComponent } from './components/common/login-google/login-google.component';
import { CardControlComponent } from './components/controller/card-control/card-control.component';
import { PlaybackCardsComponent } from './components/playback/playback-cards/playback-cards.component';
import { AboutMainComponent } from './components/about/about-main/about-main.component';
import { ShipUpgradeComponent } from './components/controller/ship-upgrade/ship-upgrade.component';
import { DialManeuverComponent } from './components/common/dial-maneuver/dial-maneuver.component';
import { DialSheetComponent } from './components/common/dial-sheet/dial-sheet.component';
import { PlaybackCardsStandaloneComponent } from './components/playback/playback-cards-standalone/playback-cards-standalone.component';



export const firebaseConfig = environment.firebaseConfig;



@NgModule({
  declarations: [
    AppComponent,
    DashboardMainComponent,
    PlaybackMainComponent,
    StreamListComponent,
    ControllerMainComponent,
    AddStreamComponent,
    PlayerListComponent,
    ShipComponent,
    PlaybackPlayerNameComponent,
    PlaybackPlayerListComponent,
    PlaybackShipComponent,
    NavbarComponent,
    DiceComponent,
    DieComponent,
    DiceInputComponent,
    PlaybackDiceVerticalComponent,
    TimerControlComponent,
    TimerControlSlimComponent,
    PlaybackTimerComponent,
    PlaybackTimerStandaloneComponent,
    PlaybackDiceVerticalStandaloneComponent,
    PlaybackDiceHorizontalStandaloneComponent,
    PlaybackDiceHorizontalComponent,
    PlaybackLogoComponent,
    LoginGoogleComponent,
    CardControlComponent,
    PlaybackCardsComponent,
    AboutMainComponent,
    ShipUpgradeComponent,
    DialManeuverComponent,
    DialSheetComponent,
    PlaybackCardsStandaloneComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    ColorPickerModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [
    AngularFireAuthModule,
    AngularFireDatabase,
    AngularFireDatabaseModule,
    StreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
