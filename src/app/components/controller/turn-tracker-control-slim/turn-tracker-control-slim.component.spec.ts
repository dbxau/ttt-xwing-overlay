import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnTrackerControlSlimComponent } from './turn-tracker-control-slim.component';

describe('TurnTrackerControlSlimComponent', () => {
  let component: TurnTrackerControlSlimComponent;
  let fixture: ComponentFixture<TurnTrackerControlSlimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnTrackerControlSlimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnTrackerControlSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
