import { ProfileComponent } from '../home/profile/profile.component';
import { CallbackComponent } from '../auth/callback/callback.component';
import { FeedbackComponent } from '../shared/feedback/feedback.component';
import { HomeDashComponent } from '../home/home-dash/home-dash.component';
import { GmNotesComponent } from '../gamemaster/gm-notes/gm-notes.component';
import { GmDashComponent } from '../gamemaster/gm-dash/gm-dash.component';
import { GameRulesComponent } from '../shared/game-rules/game-rules.component';
import { PlayerNotesComponent } from '../player/player-notes/player-notes.component';
import { PlayerDashComponent } from '../player/player-dash/player-dash.component';
import { HomeRedirectService } from './home-redirect.service';
import { AuthGuardService } from './auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WelcomeComponent } from '../welcome/welcome.component';
import { PlayerComponent } from '../player/player.component';
import { GamemasterComponent } from '../gamemaster/gamemaster.component';
import { HomeComponent } from '../home/home.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';

const appRoutes: Routes = [
  {path: "", component: WelcomeComponent, canActivate: [HomeRedirectService]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuardService], children: [
    {path: "", component: HomeDashComponent},
    {path: "feedback", component: FeedbackComponent},
    {path: "profile", component: ProfileComponent}
  ]},
  {path: "player", component: PlayerComponent, canActivate: [AuthGuardService], children:[
    {path: "", component: PlayerDashComponent},
    {path: "notes", component: PlayerNotesComponent},
    {path: "rules", component: GameRulesComponent}
  ]},
  {path: "gamemaster", component: GamemasterComponent, canActivate: [AuthGuardService], children:[
    {path: "", component: GmDashComponent},
    {path: "notes", component: GmNotesComponent},
    {path: "rules", component: GameRulesComponent}
  ]},
  {path: "callback", component: CallbackComponent},
  {path: "not-found", component: ErrorPageComponent, data: {message: 'Page not found!'}},
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService, HomeRedirectService]
})
export class AppRoutingModule { }
