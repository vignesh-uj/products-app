import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
