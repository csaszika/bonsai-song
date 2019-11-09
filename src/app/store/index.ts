import { ActionReducerMap } from '@ngrx/store';
import { reducer as songsReducer, SongsState } from './songs/reducer';

export interface AppState {
  songs: SongsState;
}

export const reducers: ActionReducerMap<AppState> = {
  songs: songsReducer
};
