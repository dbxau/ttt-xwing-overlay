import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackTimerComponent } from './playback-timer.component';

describe('PlaybackTimerComponent', () => {
  let component: PlaybackTimerComponent;
  let fixture: ComponentFixture<PlaybackTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
