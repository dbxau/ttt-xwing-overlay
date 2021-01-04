import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackPlayerNameComponent } from './playback-player-name.component';

describe('PlaybackPlayerNameComponent', () => {
  let component: PlaybackPlayerNameComponent;
  let fixture: ComponentFixture<PlaybackPlayerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackPlayerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackPlayerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
