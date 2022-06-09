import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../app.state';
import { retrieveLyrics, retrieveLyricsError, retrieveLyricsSuccess } from './lyrics.action';
import {LyricsService} from 'src/app/services/lyrics.service'
 
@Injectable()
export class LyricsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private lyricsService: LyricsService
  ) {}

  loadLyrics$ = createEffect(()=>
  this.actions$.pipe(
      ofType(retrieveLyrics),
      switchMap((action:{artist:string, title:string})=>
      from(this.lyricsService.getLyrics(action.artist, action.title)).pipe(
          map(res => retrieveLyricsSuccess( { lyricsResponse: res })),
          catchError((error)=>of(retrieveLyricsError({error:'error'})))
      )
      )
  )
  )
}