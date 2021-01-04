import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackCardsComponent } from './playback-cards.component';

describe('PlaybackCardsComponent', () => {
  let component: PlaybackCardsComponent;
  let fixture: ComponentFixture<PlaybackCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
