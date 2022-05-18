import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseBalanceComponent } from './expense-balance.component';

describe('ExpenseBalanceComponent', () => {
  let component: ExpenseBalanceComponent;
  let fixture: ComponentFixture<ExpenseBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
