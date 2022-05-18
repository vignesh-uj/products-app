import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from 'src/app/services/account-management.service';

@Component({
  selector: 'app-income-expense-chart',
  templateUrl: './income-expense-chart.component.html',
  styleUrls: ['./income-expense-chart.component.css']
})
export class IncomeExpenseChartComponent implements OnInit {

  chartOptions: any = {};

  constructor(private accountService: AccountManagementService) {
   }

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData () {
    this.accountService.getTransactions().subscribe(transactions => {
      const sortedTransactions = transactions.sort(function (a, b) {
        return ('' + a.dateTime).localeCompare(b.dateTime);
      });
      const expenses = sortedTransactions.filter(tr => tr.transactionType === '-1').map(x => x.amount);
      const incomes = sortedTransactions.filter(tr => tr.transactionType === '1').map(x => x.amount);
      const days = sortedTransactions.map(tr => tr.dateTime);

      this.chartOptions = {
        series: [
          {
            name: "Income",
            data: incomes
          },
          {
            name: "Expense",
            data: expenses
          }
        ],
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "date",
          categories: days
        },
        tooltip: {
          x: {
            format: "dd/MM/yy"
          }
        }
      };

    })
  }

}
