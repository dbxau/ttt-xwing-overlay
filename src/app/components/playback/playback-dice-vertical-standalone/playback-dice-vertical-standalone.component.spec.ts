import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackDiceVerticalStandaloneComponent } from './playback-dice-vertical-standalone.component';

describe('PlaybackDiceVerticalStandaloneComponent', () => {
  let component: PlaybackDiceVerticalStandaloneComponent;
  let fixture: ComponentFixture<PlaybackDiceVerticalStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackDiceVerticalStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackDiceVerticalStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
