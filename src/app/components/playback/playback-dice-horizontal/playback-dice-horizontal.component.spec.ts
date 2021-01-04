import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackDiceHorizontalComponent } from './playback-dice-horizontal.component';

describe('PlaybackDiceHorizontalComponent', () => {
  let component: PlaybackDiceHorizontalComponent;
  let fixture: ComponentFixture<PlaybackDiceHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackDiceHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackDiceHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
