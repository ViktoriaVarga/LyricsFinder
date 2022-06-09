import { createReducer, on } from '@ngrx/store';
import { LyricsResponse } from 'src/app/models/lyrics.model';
import {
    clearLyricsState,
  retrieveLyrics,
  retrieveLyricsError,
  retrieveLyricsSuccess,
} from './lyrics.action';

export interface lyricsState {
  lyricsResponse: LyricsResponse;
  error?: string;
  status: 'pending' | 'loading' | 'error' | 'success'|'cleared';
}

export const initialState: lyricsState = {
  lyricsResponse: { lyrics: '' },
  status: 'pending',
};

export const lyricsReducer = createReducer(
  initialState,

  on(retrieveLyrics, (state) => ({ ...state, status: 'loading' })),

  on(retrieveLyricsSuccess, (state, { lyricsResponse }) => ({
    ...state,
    lyricsResponse,
    error: undefined,
    status: 'pending',
  })),

  on(retrieveLyricsError, (state) => ({ ...state, error: 'error', status: 'error'})),

  on(clearLyricsState,(state)=>({...state, status:'cleared', error: undefined, lyricsResponse:{lyrics: ''} , }) )
);
