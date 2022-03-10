import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackScenarioStandaloneComponent } from './playback-scenario-standalone.component';

describe('PlaybackScenarioStandaloneComponent', () => {
  let component: PlaybackScenarioStandaloneComponent;
  let fixture: ComponentFixture<PlaybackScenarioStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackScenarioStandaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackScenarioStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
