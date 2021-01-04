import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialManeuverComponent } from './dial-maneuver.component';

describe('DialManeuverComponent', () => {
  let component: DialManeuverComponent;
  let fixture: ComponentFixture<DialManeuverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialManeuverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialManeuverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
