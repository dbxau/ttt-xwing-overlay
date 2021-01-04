import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackTimerStandaloneComponent } from './playback-timer-standalone.component';

describe('PlaybackTimerStandaloneComponent', () => {
  let component: PlaybackTimerStandaloneComponent;
  let fixture: ComponentFixture<PlaybackTimerStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackTimerStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackTimerStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
