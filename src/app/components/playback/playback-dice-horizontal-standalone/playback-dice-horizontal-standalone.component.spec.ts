import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackDiceHorizontalStandaloneComponent } from './playback-dice-horizontal-standalone.component';

describe('PlaybackDiceHorizontalStandaloneComponent', () => {
  let component: PlaybackDiceHorizontalStandaloneComponent;
  let fixture: ComponentFixture<PlaybackDiceHorizontalStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackDiceHorizontalStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackDiceHorizontalStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
