import { Component, OnInit } from '@angular/core';
import { IUser, ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList: IUser[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers () {
    const usersObservables = this.productService.getUsers();
    usersObservables.subscribe(this.onUserChanged)
  }

  onUserChanged (users: IUser[]) {
    this.userList = users;
  }

}
