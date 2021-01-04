import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerControlSlimComponent } from './timer-control-slim.component';

describe('TimerComponent', () => {
  let component: TimerControlSlimComponent;
  let fixture: ComponentFixture<TimerControlSlimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerControlSlimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerControlSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
