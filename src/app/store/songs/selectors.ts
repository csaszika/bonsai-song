import { AppState } from '../index';
import { createSelector } from '@ngrx/store';
import { SongsState } from './reducer';
import { SongsContainerItem } from '../../shell/songs-container/songs-container-datasource';

export const selectSongsFeature = (state: AppState) => state.songs;

export const selectSongs = createSelector(
  selectSongsFeature,
  (state: SongsState): SongsContainerItem[] => state.songs
);
export const selectSongsLoading = createSelector(
  selectSongsFeature,
  (state: SongsState) => state.loading
);
export const selectSongsError = createSelector(
  selectSongsFeature,
  (state: SongsState) => state.error
);
