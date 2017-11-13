// CORE IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// VENDOR IMPORTS

// SERVICES
import { PlayGameService } from './shared/play-game.service';
import { AuthService } from './auth/auth.service';
import { GameApiService } from './shared/game-api.service';
// ROUTING
import { AppRoutingModule } from './app-routing/app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { GamemasterComponent } from './gamemaster/gamemaster.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameNavComponent } from './navbar/game-nav/game-nav.component';
import { HomeNavComponent } from './navbar/home-nav/home-nav.component';
import { WelcomeNavComponent } from './navbar/welcome-nav/welcome-nav.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerDashComponent } from './player/player-dash/player-dash.component';
import { GmDashComponent } from './gamemaster/gm-dash/gm-dash.component';
import { PlayerNotesComponent } from './player/player-notes/player-notes.component';
import { GmNotesComponent } from './gamemaster/gm-notes/gm-notes.component';
import { GameRulesComponent } from './shared/game-rules/game-rules.component';
import { HomeDashComponent } from './home/home-dash/home-dash.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { ProfileComponent } from './home/profile/profile.component';
import { PlayerCardComponent } from './home/home-dash/player-card/player-card.component';
import { GmCardComponent } from './home/home-dash/gm-card/gm-card.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerControlComponent } from './gamemaster/gm-dash/player-control/player-control.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    GamemasterComponent,
    HomeComponent,
    NavbarComponent,
    GameNavComponent,
    HomeNavComponent,
    WelcomeNavComponent,
    ErrorPageComponent,
    WelcomeComponent,
    PlayerDashComponent,
    GmDashComponent,
    PlayerNotesComponent,
    GmNotesComponent,
    GameRulesComponent,
    HomeDashComponent,
    FeedbackComponent,
    CallbackComponent,
    ProfileComponent,
    PlayerCardComponent,
    GmCardComponent,
    FooterComponent,
    PlayerControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    GameApiService,
    PlayGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
