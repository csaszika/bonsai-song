import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export interface SongsContainerItem {
  id: string;
  performer: string;
  title: string;
  rating: number;
}

// TODO: replace this with real data
const EXAMPLE_DATA: SongsContainerItem[] = [
  {
    title: 'Bonsai',
    performer: 'Supercombo',
    rating: 5,
    id: 'F5irxq0'
  },
  {
    title: 'Dark Parking Lot',
    performer: 'Bonsai Trees',
    rating: 5,
    id: 'HNb4Y4b'
  },
  {
    title: 'Gamble Rumble',
    performer: 'Banzai Bonsai Tensai',
    rating: 5,
    id: 'AoQmGB4'
  },
  {
    title: 'Ficus',
    performer: 'Marius Schiffer',
    rating: 5,
    id: 'QdkJXKU'
  },
  {
    title: 'Bonsai Garden',
    performer: 'Mujo',
    rating: 5,
    id: 'VZmNOvj'
  },
  {
    title: 'The Darkest Light',
    performer: 'Bonsai Kitten',
    rating: 5,
    id: 'fs4G2ML'
  },
  {
    title: 'Home',
    performer: 'Don Bonsai',
    rating: 5,
    id: 'ytm8k08'
  },
  {
    title: 'Yukka',
    performer: 'Balo',
    rating: 5,
    id: 'Dm4AxvL'
  },
  {
    title: 'Still',
    performer: 'Yukka',
    rating: 5,
    id: 'r1qX7ci'
  },
  {
    title: 'Treefingers',
    performer: 'Radiohead',
    rating: 5,
    id: 'l2gTeRq'
  },
  {
    title: 'One Tree Hill',
    performer: 'The Coronas',
    rating: 5,
    id: 'KWdy5Yx'
  },
  {
    title: 'Willow Garden',
    performer: 'Lankum',
    rating: 5,
    id: 'xf5XkVl'
  },
  {
    title: 'Plant Life',
    performer: 'Owl City',
    rating: 5,
    id: 'V8sUzyK'
  },
  {
    title: 'Plastic Plant',
    performer: 'Thee Oh Sees',
    rating: 5,
    id: 'x7nRGFw'
  },
  {
    title: 'Forest',
    performer: 'System of a down',
    rating: 5,
    id: 'W4PKZcD'
  },
  {
    title: 'Erdo',
    performer: 'Hiperkarma',
    rating: 5,
    id: 's2GIXFE'
  },
  {
    title: 'Mesel az erdo',
    performer: 'HBB',
    rating: 5,
    id: 'vKPrSrb'
  },
  {
    title: 'All I Want',
    performer: 'Kodaline',
    rating: 5,
    id: 'CjaIEzO'
  }
];

export class SongsContainerDataSource extends DataSource<SongsContainerItem> {
  data: SongsContainerItem[] = EXAMPLE_DATA;

  constructor() {
    super();
  }

  connect(): Observable<SongsContainerItem[]> {
    return of(this.data);
  }

  disconnect() {}
}
