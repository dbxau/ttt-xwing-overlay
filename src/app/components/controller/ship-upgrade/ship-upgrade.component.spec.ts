import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipUpgradeComponent } from './ship-upgrade.component';

describe('ShipUpgradeComponent', () => {
  let component: ShipUpgradeComponent;
  let fixture: ComponentFixture<ShipUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
