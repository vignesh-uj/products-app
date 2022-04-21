import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrafficOverviewComponent } from './customer-traffic-overview.component';

describe('CustomerTrafficOverviewComponent', () => {
  let component: CustomerTrafficOverviewComponent;
  let fixture: ComponentFixture<CustomerTrafficOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTrafficOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTrafficOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
