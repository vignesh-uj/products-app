import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { IncomeBalanceComponent } from './income-balance/income-balance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ExpenseBalanceComponent } from './expense-balance/expense-balance.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IncomeExpenseChartComponent } from './income-expense-chart/income-expense-chart.component';
import { RupeesPipe } from '../pipes/rupees.pipe';
@NgModule({
  declarations: [
    IncomeExpensesComponent,
    AddEntryComponent,
    IncomeBalanceComponent,
    ExpenseBalanceComponent,
    IncomeExpenseChartComponent,
    RupeesPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    CommonModule
  ],
  exports: [IncomeExpensesComponent]
})
export class AccountManagementModule { }
