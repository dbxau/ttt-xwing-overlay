import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackPlayerListComponent } from './playback-player-list.component';

describe('PlaybackPlayerListComponent', () => {
  let component: PlaybackPlayerListComponent;
  let fixture: ComponentFixture<PlaybackPlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackPlayerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
