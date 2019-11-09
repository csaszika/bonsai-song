import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SongsContainerDataSource, SongsContainerItem } from './songs-container-datasource';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'bs-songs-container',
  templateUrl: './songs-container.component.html',
  styleUrls: ['./songs-container.component.scss']
})
export class SongsContainerComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<SongsContainerItem>;
  dataSource: SongsContainerDataSource;
  displayedColumns = ['select', 'id', 'performer', 'title', 'rating'];
  selection = new SelectionModel<SongsContainerItem>(true, []);

  ngOnInit() {
    this.dataSource = new SongsContainerDataSource();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
