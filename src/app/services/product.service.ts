import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts () {
    return this.httpClient.get('http://localhost:3000/products')
  }

  public saveProduct (productInfo: any) {
    return this.httpClient.post('http://localhost:3000/products', productInfo);
  }

  public getProductDetail (productId: string) {
    return this.httpClient.get('http://localhost:3000/products/' + productId)
  }

  public updateProduct (productId: string, productInfo: any) {
    return this.httpClient.put('http://localhost:3000/products/' + productId, productInfo);
  }

  public deleteProduct (productId: string) {
    return this.httpClient.delete('http://localhost:3000/products/' + productId);
  }

  users = new BehaviorSubject<IUser[]>([]);
  usersObservables = this.users.asObservable();  

  public addUser (user: IUser) {
    const userList = this.users.value;
    userList.push(user);
    this.users.next(userList);
  }

  public updateUser (user: IUser) {
    const currentUserIndex = this.users.value.findIndex(x => x.userName === user.userName);
    const userList = [...this.users.value];
    userList[currentUserIndex] = user;
    this.users.next(userList);
  }

  public getUsers () {
    return this.usersObservables;
  }
}


export interface IUser {
  userName: string;
  followers: number;
  projects: number;
}