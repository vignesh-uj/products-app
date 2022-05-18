import { Component, OnInit } from '@angular/core';
import { AccountManagementService, ITransaction } from 'src/app/services/account-management.service';

@Component({
  selector: 'app-expense-balance',
  templateUrl: './expense-balance.component.html',
  styleUrls: ['./expense-balance.component.css']
})
export class ExpenseBalanceComponent implements OnInit {

  expenseData: ITransaction[] = [];

  constructor(private accountService: AccountManagementService) { }

  ngOnInit(): void {
    this.getExpenseData();
  }

  getExpenseData () {
    this.accountService.getTransactions().subscribe(transactions => {
      this.expenseData = transactions.filter(t => t.transactionType === '-1');
    });
  }

  get totalExpense () {
    return this.expenseData.map(x => x.amount).reduce((a, b) => a + b, 0)
  }

}
