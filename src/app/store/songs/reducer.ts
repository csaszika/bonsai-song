import { Action, createReducer, on } from '@ngrx/store';
import * as SongsActions from './actions';
import { SongsContainerItem } from '../../shell/songs-container/songs-container-datasource';

export interface SongsState {
  songs: SongsContainerItem[];
  loading: boolean;
  error: boolean;
}

export const initialState = (): SongsState => {
  return {
    songs: [],
    loading: false,
    error: false,
  };
};

const songsReducer = createReducer(
  initialState(),
  on(SongsActions.getSongs, (state) => ({ ...state, loading: true, error: false })),
  on(SongsActions.loadSongs, (state, { songs }) => ({ ...state, loading: false, songs: [...songs] })),
  on(SongsActions.loadSongsFailed, (state) =>  ({ ...state, loading: false, error: true }))
);

export function reducer(state: SongsState, action: Action) {
  return songsReducer(state, action);
}
