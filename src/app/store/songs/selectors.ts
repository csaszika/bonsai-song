import { AppState } from '../index';
import { createSelector } from '@ngrx/store';
import { SongsState } from './reducer';
import { SongId, SongsItem } from '../../shell/songs-container/songs-container-datasource';

export const selectSongsFeature = (state: AppState) => state.songs;

export const selectSongs = createSelector(
  selectSongsFeature,
  (state: SongsState): SongsItem[] => state.songs
);
export const selectSelectedSongsIds = createSelector(
  selectSongsFeature,
  (state: SongsState): Array<SongId> => {
    return Array.from(state.selectedSongsIds);
  }
);
export const selectIsAllSongsSelected = createSelector(
  selectSongsFeature,
  (state: SongsState): boolean => {
    return state.selectedSongsIds.size === state.songs.length;
  }
);
export const selectSongsLoading = createSelector(
  selectSongsFeature,
  (state: SongsState) => state.loading
);
export const selectSongsError = createSelector(
  selectSongsFeature,
  (state: SongsState) => state.error
);
