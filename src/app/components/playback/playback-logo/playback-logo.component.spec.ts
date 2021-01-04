import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackLogoComponent } from './playback-logo.component';

describe('PlaybackLogoComponent', () => {
  let component: PlaybackLogoComponent;
  let fixture: ComponentFixture<PlaybackLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
