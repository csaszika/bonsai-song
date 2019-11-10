import { createAction, props } from '@ngrx/store';
import { SongId, SongsItem } from '../../shell/songs-container/songs-container-datasource';

export const getSongs = createAction('[Songs] Get songs effect');
export const loadSongs = createAction('[Songs] Load songs into store', props<{songs: SongsItem[]}>());
export const loadSongsFailed = createAction('[Songs] Load songs failed');

export const toggleSong = createAction('[Songs] Toggle song by id', props<{songId: SongId}>());
export const clearSelectedSongsIds = createAction('[Songs] Clear selected songs');
export const selectAllSongs = createAction('[Songs] Select all songs');
