import { Action, createReducer, on } from '@ngrx/store';
import * as SongsActions from './actions';
import { SongId, SongsItem } from '../../shell/songs-container/songs-container-datasource';

export interface SongsState {
  songs: SongsItem[];
  loading: boolean;
  error: boolean;
  selectedSongsIds: Set<SongId>;
}

export const initialState = (): SongsState => {
  return {
    songs: [],
    loading: false,
    error: false,
    selectedSongsIds: new Set<SongId>(),
  };
};

const songsReducer = createReducer(
  initialState(),
  on(SongsActions.getSongs, (state: SongsState) => ({ ...state, loading: true, error: false })),
  on(SongsActions.loadSongs, (state: SongsState, { songs }) => ({ ...state, loading: false, songs: [...songs] })),
  on(SongsActions.loadSongsFailed, (state: SongsState) =>  ({ ...state, loading: false, error: true })),
  on(SongsActions.toggleSong, (state: SongsState, { songId }) =>  {
    state.selectedSongsIds.has(songId) ? state.selectedSongsIds.delete(songId) : state.selectedSongsIds.add(songId);
    return {
      ...state,
      selectedSongs: new Set(state.selectedSongsIds),
    };
  }),
  on(SongsActions.clearSelectedSongsIds, (state: SongsState) =>  ({ ...state, selectedSongsIds: new Set<SongId>() })),
  on(SongsActions.selectAllSongs, (state: SongsState) =>  {
    const ids = state.songs.map((song: SongsItem) => song.id);
    return {
      ...state,
      selectedSongsIds: new Set(ids),
    };
  })
);

export function reducer(state: SongsState, action: Action) {
  return songsReducer(state, action);
}
