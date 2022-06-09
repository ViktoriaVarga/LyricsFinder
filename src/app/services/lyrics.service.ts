import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LyricsResponse } from '../models/lyrics.model';

const LYRICS_URN = 'https://api.lyrics.ovh/v1/';

@Injectable({
  providedIn: 'root',
})
export class LyricsService {
  constructor(private http: HttpClient) {}

 public getLyrics(artist: string, title: string):Observable<LyricsResponse> {
    return this.http.get(`${LYRICS_URN}/${artist}/${title}`).pipe(map(res => res as LyricsResponse))
    ;
  }
}
