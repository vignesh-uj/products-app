import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeBalanceComponent } from './income-balance.component';

describe('IncomeBalanceComponent', () => {
  let component: IncomeBalanceComponent;
  let fixture: ComponentFixture<IncomeBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
