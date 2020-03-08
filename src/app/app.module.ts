import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelerComponent } from './traveler/traveler/traveler.component';
import { CreditsComponent } from './endcard/credits.component';
import { MagicComponent } from './opening/magic.component';


@NgModule({
  declarations: [
    AppComponent,
    TravelerComponent,
    CreditsComponent,
    MagicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
