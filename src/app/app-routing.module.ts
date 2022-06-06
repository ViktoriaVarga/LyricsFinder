import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LyricsFinderPageComponent } from './lyrics-finder-page/lyrics-finder-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'lyrics-finder', component: LyricsFinderPageComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
