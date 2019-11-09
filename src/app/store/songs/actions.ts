import { createAction, props } from '@ngrx/store';
import { SongsContainerItem } from '../../shell/songs-container/songs-container-datasource';

export const getSongs = createAction('[Songs] Get songs effect');
export const loadSongs = createAction('[Songs] Load songs into store', props<{songs: SongsContainerItem[]}>());
export const loadSongsFailed = createAction('[Songs] Load songs failed');

export const toggleSong = createAction('[Songs] Toggle song by id', props<{songId: string}>());
