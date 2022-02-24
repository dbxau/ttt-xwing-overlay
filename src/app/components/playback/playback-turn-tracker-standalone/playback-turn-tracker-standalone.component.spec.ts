import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackTurnTrackerStandaloneComponent } from './playback-turn-tracker-standalone.component';

describe('PlaybackTurnTrackerStandaloneComponent', () => {
  let component: PlaybackTurnTrackerStandaloneComponent;
  let fixture: ComponentFixture<PlaybackTurnTrackerStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackTurnTrackerStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackTurnTrackerStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
