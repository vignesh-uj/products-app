import { Component, OnInit } from '@angular/core';
import { AccountManagementService, ITransaction } from 'src/app/services/account-management.service';

@Component({
  selector: 'app-income-balance',
  templateUrl: './income-balance.component.html',
  styleUrls: ['./income-balance.component.css']
})
export class IncomeBalanceComponent implements OnInit {

  incomeData: ITransaction[] = [];

  constructor(private accountService: AccountManagementService) { }

  ngOnInit(): void {
    this.getAccountIncomeData();
  }

  getAccountIncomeData () {
    this.accountService.getTransactions().subscribe(transactions => {
      this.incomeData = transactions.filter(t => t.transactionType === '1');
    });
  }

  get totalIncome () {
    return this.incomeData.map(x => x.amount).reduce((a, b) => a + b, 0)
  }

}
