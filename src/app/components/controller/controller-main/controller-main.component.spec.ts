import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerMainComponent } from './controller-main.component';

describe('StreamComponent', () => {
  let component: ControllerMainComponent;
  let fixture: ComponentFixture<ControllerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
