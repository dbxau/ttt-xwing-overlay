import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardControlComponent } from './card-control.component';

describe('CardControlComponent', () => {
  let component: CardControlComponent;
  let fixture: ComponentFixture<CardControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
