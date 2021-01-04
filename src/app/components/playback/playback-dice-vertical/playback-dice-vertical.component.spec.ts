import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackDiceVerticalComponent } from './playback-dice-vertical.component';

describe('PlaybackDiceVerticalComponent', () => {
  let component: PlaybackDiceVerticalComponent;
  let fixture: ComponentFixture<PlaybackDiceVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackDiceVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackDiceVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
