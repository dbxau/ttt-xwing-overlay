import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackShipComponent } from './playback-ship.component';

describe('PlaybackShipComponent', () => {
  let component: PlaybackShipComponent;
  let fixture: ComponentFixture<PlaybackShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
