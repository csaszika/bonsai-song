import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SongId, SongsContainerDataSource, SongsItem } from './songs-container-datasource';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store';
import { selectIsAllSongsSelected, selectSelectedSongsIds, selectSongs } from '../../store/songs/selectors';
import { Observable, Subscription } from 'rxjs';
import { clearSelectedSongsIds, getSongs, selectAllSongs, toggleSong } from '../../store/songs/actions';

@Component({
  selector: 'bs-songs-container',
  templateUrl: './songs-container.component.html',
  styleUrls: ['./songs-container.component.scss']
})
export class SongsContainerComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatTable, {static: false}) table: MatTable<SongsItem>;
  dataSource: SongsContainerDataSource;

  songs$: Observable<SongsItem[]>;
  isAllSelected: boolean;
  subscriptions: Subscription = new Subscription();
  displayedColumns = ['select', 'id', 'performer', 'title', 'rating'];
  selectedSongsIds = new Set<SongId>();

  constructor(private readonly store: Store<AppState>) {
    this.songs$ = this.store.select(selectSongs);
    this.subscriptions
      .add(this.store.pipe(select(selectIsAllSongsSelected)).subscribe((isAllSelected: boolean) => {
        this.isAllSelected = isAllSelected;
      }))
      .add(this.store.pipe(select(selectSelectedSongsIds)).subscribe((ids: Array<SongId>) => {
        this.selectedSongsIds = new Set<SongId>(ids);
      }));
  }

  ngOnInit(): void {
    this.store.dispatch(getSongs());
    this.dataSource = new SongsContainerDataSource(this.songs$);
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  masterToggle(): void {
    this.isAllSelected ?
      this.store.dispatch(clearSelectedSongsIds()) :
      this.store.dispatch(selectAllSongs());
  }

  toggleRow(songId: SongId): void {
    this.store.dispatch(toggleSong({ songId }));
  }
}
