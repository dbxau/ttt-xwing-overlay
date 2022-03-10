import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuard } from "./core/auth.guard";

import { DashboardMainComponent } from './components/dashboard/dashboard-main/dashboard-main.component';
import { PlaybackMainComponent } from './components/playback/playback-main/playback-main.component';
import { ControllerMainComponent } from './components/controller/controller-main/controller-main.component';
import { AboutMainComponent } from './components/about/about-main/about-main.component';
import { PlaybackTimerStandaloneComponent } from './components/playback/playback-timer-standalone/playback-timer-standalone.component';
import { PlaybackTurnTrackerStandaloneComponent } from './components/playback/playback-turn-tracker-standalone/playback-turn-tracker-standalone.component';
import { PlaybackDiceVerticalStandaloneComponent } from './components/playback/playback-dice-vertical-standalone/playback-dice-vertical-standalone.component';
import { PlaybackDiceHorizontalStandaloneComponent } from './components/playback/playback-dice-horizontal-standalone/playback-dice-horizontal-standalone.component';
import { PlaybackCardsStandaloneComponent } from './components/playback/playback-cards-standalone/playback-cards-standalone.component';
import { PlaybackScenarioStandaloneComponent } from './components/playback/playback-scenario-standalone/playback-scenario-standalone.component';




const appRoutes: Routes = [
    {path:'', component:DashboardMainComponent},
    {path:'about', component:AboutMainComponent},
    {path:'stream/:id/live', component:PlaybackMainComponent},
    {path:'stream/:id/live/timer', component:PlaybackTimerStandaloneComponent},
    {path:'stream/:id/live/turntracker', component:PlaybackTurnTrackerStandaloneComponent},
    {path:'stream/:id/live/scenario', component:PlaybackScenarioStandaloneComponent},
    {path:'stream/:id/live/cards', component:PlaybackCardsStandaloneComponent},
    {path:'stream/:id/live/dice/v/:playerindex', component:PlaybackDiceVerticalStandaloneComponent},
    {path:'stream/:id/live/dice/h/:playerindex', component:PlaybackDiceHorizontalStandaloneComponent},
    {path:'stream/:id', component:ControllerMainComponent,  canActivate: [AuthGuard]},
  ]


@NgModule({
imports: [
    RouterModule.forRoot(
    appRoutes
    )
],
exports: [
    RouterModule
]
})

export class AppRoutingModule {}