import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getSongs, loadSongs, loadSongsFailed } from './actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SongsItem } from '../../shell/songs-container/songs-container-datasource';
import { of } from 'rxjs';

@Injectable()
export class SongsEffects {

  loadSongs$ = createEffect(() => this.actions$.pipe(
    ofType(getSongs.type),
    switchMap(() => this.http.get<{ songs: SongsItem[] }>('https://bonsai-playlist.herokuapp.com/songs')
      .pipe(
        map((data: { songs: SongsItem[] } ) => (loadSongs(data))),
        catchError(() => of(loadSongsFailed()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private readonly http: HttpClient
  ) {}
}
