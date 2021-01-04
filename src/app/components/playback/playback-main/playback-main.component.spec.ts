import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackMainComponent } from './playback-main.component';

describe('PlaybackMainComponent', () => {
  let component: PlaybackMainComponent;
  let fixture: ComponentFixture<PlaybackMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
