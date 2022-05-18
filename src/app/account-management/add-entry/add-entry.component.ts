import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountManagementService } from 'src/app/services/account-management.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  entryForm = this.formBuilder.group({
    title: [''],
    note: [''],
    amount: [''],
    dateTime: [''],
    transactionType: ['']
  });

  constructor(private formBuilder: FormBuilder, private accountService: AccountManagementService) { }

  ngOnInit(): void {
  }

  onSaveEntry () {
    this.accountService.addTransaction(this.entryForm.value);
  }

}
