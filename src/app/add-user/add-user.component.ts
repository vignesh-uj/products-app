import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = this.formBuilder.group({
    userName: [''],
    followers: [''],
    projects: ['']
  });

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSave () {
    console.log(this.userForm.value);
    this.productService.addUser(this.userForm.value);
  }

}
