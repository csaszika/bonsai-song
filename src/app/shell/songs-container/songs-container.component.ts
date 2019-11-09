import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SongsContainerDataSource, SongsContainerItem } from './songs-container-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { selectSongs } from '../../store/songs/selectors';
import { Observable } from 'rxjs';
import { getSongs } from '../../store/songs/actions';

@Component({
  selector: 'bs-songs-container',
  templateUrl: './songs-container.component.html',
  styleUrls: ['./songs-container.component.scss']
})
export class SongsContainerComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<SongsContainerItem>;
  dataSource: SongsContainerDataSource;

  songs$: Observable<SongsContainerItem[]>;
  displayedColumns = ['select', 'id', 'performer', 'title', 'rating'];
  selection = new SelectionModel<SongsContainerItem>(true, []);

  constructor(private readonly store: Store<AppState>) {
    this.songs$ = this.store.select(selectSongs);
  }

  ngOnInit() {
    this.store.dispatch(getSongs());
    this.dataSource = new SongsContainerDataSource(this.songs$);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }

  isAllSelected() {
    // todo use state management
    // const numSelected = this.selection.selected.length;
    // const numRows = this.dataSource.data.length;
    // return numSelected === numRows;
  }

  masterToggle() {
    // todo use state management
    // this.isAllSelected() ?
    //   this.selection.clear() :
    //   this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
