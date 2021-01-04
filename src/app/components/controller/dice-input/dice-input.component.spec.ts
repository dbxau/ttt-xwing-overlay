import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceInputComponent } from './dice-input.component';

describe('DiceInputComponent', () => {
  let component: DiceInputComponent;
  let fixture: ComponentFixture<DiceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
