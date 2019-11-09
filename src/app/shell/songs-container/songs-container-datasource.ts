import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export interface SongsContainerItem {
  id: string;
  performer: string;
  title: string;
  rating: number;
}

export class SongsContainerDataSource extends DataSource<SongsContainerItem> {

  constructor(private songs$: Observable<SongsContainerItem[]>) {
    super();
  }

  connect(): Observable<SongsContainerItem[]> {
    return this.songs$;
  }

  disconnect() {
  }
}
