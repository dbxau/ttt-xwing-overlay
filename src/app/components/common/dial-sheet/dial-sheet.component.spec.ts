import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialSheetComponent } from './dial-sheet.component';

describe('DialSheetComponent', () => {
  let component: DialSheetComponent;
  let fixture: ComponentFixture<DialSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
