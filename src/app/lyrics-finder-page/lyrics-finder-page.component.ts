import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearLyricsState, retrieveLyrics } from '../state/lyrics/lyrics.action';
import { lyricsState } from '../state/lyrics/lyrics.reducer';

@Component({
  selector: 'app-lyrics-finder-page',
  templateUrl: './lyrics-finder-page.component.html',
  styleUrls: ['./lyrics-finder-page.component.scss']
})
export class LyricsFinderPageComponent {
  public finderForm: FormGroup;
  public lyrics$:Observable<string> = this.store.select(state => state.lyricsStore.lyricsResponse.lyrics);
  public errorMessage$:Observable<string|undefined> = this.store.select(state => state.lyricsStore.error);


  constructor(private store: Store<{lyricsStore:lyricsState}>) {
    this.finderForm = new FormGroup({
      artist: new FormControl(null, [
        Validators.required,
      ]),
      title: new FormControl(null, [
        Validators.required,
      ])
    })
   }

  onShowLyrics(): void{
    this.store.dispatch(retrieveLyrics({artist: this.finderForm.get('artist')?.value, title:this.finderForm.get('title')?.value }))
  }

  public get artist(): AbstractControl{
    return this.finderForm.get('artist')!;
  }

  public get title(): AbstractControl{
    return this.finderForm.get('title')!;
  }

  onClear(): void{    
    this.store.dispatch(clearLyricsState());
    this.finderForm.reset();
    }

}
