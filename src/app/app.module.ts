import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LyricsFinderPageComponent } from './lyrics-finder-page/lyrics-finder-page.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { lyricsReducer } from './state/lyrics/lyrics.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LyricsEffects } from './state/lyrics/lyrics.effects';

const declarationsAndExports = [
  AppComponent,
  LandingPageComponent,
  LyricsFinderPageComponent,
];
const imporstAndExports = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...declarationsAndExports],
  imports: [
    ...imporstAndExports,
    StoreModule.forRoot({ lyricsStore: lyricsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([LyricsEffects]),
  ],
  exports: [...declarationsAndExports, ...imporstAndExports],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
