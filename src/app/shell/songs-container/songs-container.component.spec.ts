import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { SongsContainerComponent } from './songs-container.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { MatCheckbox } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';

describe('SongsContainerComponent', () => {
  let component: SongsContainerComponent;
  let fixture: ComponentFixture<SongsContainerComponent>;

  const initialState = { songs: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SongsContainerComponent,
        MockComponent(MatCheckbox),
      ],
      imports: [
        NoopAnimationsModule,
        MockModule(MatTableModule),
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
