import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  constructor() { }

  transactions = new BehaviorSubject<ITransaction[]>([]);
  transactionObservable = this.transactions.asObservable();

  getTransactions () {
    return this.transactionObservable;
  }

  addTransaction (newTransaction: ITransaction) {
    this.transactions.next([...this.transactions.value, newTransaction ]);
  }
}

export interface ITransaction {
  transactionType: string;
  amount: number;
  title: string;
  note?: string;
  dateTime: string;
}