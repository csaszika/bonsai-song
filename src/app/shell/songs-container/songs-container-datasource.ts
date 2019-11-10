import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export type SongId = string;

export interface SongsItem {
  id: SongId;
  performer: string;
  title: string;
  rating: number;
}

export class SongsContainerDataSource extends DataSource<SongsItem> {

  constructor(private songs$: Observable<SongsItem[]>) {
    super();
  }

  connect(): Observable<SongsItem[]> {
    return this.songs$;
  }

  disconnect() {
  }
}
