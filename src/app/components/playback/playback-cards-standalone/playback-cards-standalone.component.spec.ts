import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackCardsStandaloneComponent } from './playback-cards-standalone.component';

describe('PlaybackCardsStandaloneComponent', () => {
  let component: PlaybackCardsStandaloneComponent;
  let fixture: ComponentFixture<PlaybackCardsStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackCardsStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackCardsStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
