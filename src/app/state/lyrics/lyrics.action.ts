import { createAction, props } from '@ngrx/store';
import { LyricsResponse } from 'src/app/models/lyrics.model';

export const retrieveLyrics = createAction(
    '[Lyrics /API] Retrieve Lyrics',
    props<{ artist:string, title:string }>()
  );

  export const retrieveLyricsSuccess = createAction(
    '[Lyrics /API] Retrieve Lyrics Success',
    props<{lyricsResponse: LyricsResponse }>()
  );

  export const retrieveLyricsError = createAction(
    '[Lyrics /API] Retrieve Lyrics Error',
    props<{ error: string}>()
  );

  export const clearLyricsState = createAction(
    '[Lyrics] Clear State'  );
