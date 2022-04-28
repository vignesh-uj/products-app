import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = this.formBuilder.group({
    id: [''],
    name: [''],
    description: [''],
    price: ['']
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSave () {
    console.log(this.productForm.value); // save call to backend (api call)

    this.productService.saveProduct(this.productForm.value).subscribe(() => {
      alert('You have saved the product successfully.');
      this.router.navigateByUrl('/product-play');
    })
  }

}
