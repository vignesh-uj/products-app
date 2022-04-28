import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {


  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { // is the method gets called automatically when a component is mounted

  this.loadProducts();
  }

  loadProducts () {
    // any logic you want to perform when a component is initialzed
    const productResponse = this.productService.getAllProducts();

    productResponse.subscribe((response: any) => {
      this.products = response;
    }); // call the given function by passing received response to it.
  }

  onAddProduct () {
    this.router.navigateByUrl('/add-product');
  } 

  onEditProduct (prod: any) {
    this.router.navigateByUrl('/edit-product/' + prod.id);
  }

  onDeleteProduct (prod: any) {
    var result = confirm('Do you really want to delete product, ' + prod.name);
    if (result === true) {
      this.productService.deleteProduct(prod.id).subscribe(res => {
        alert('Deleted successfully');
        this.loadProducts();
      })
    }
  }
}
