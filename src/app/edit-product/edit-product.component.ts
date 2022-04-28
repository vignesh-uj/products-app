import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  currentProductId: string = '';

  productForm = this.formBuilder.group({
    name: [''],
    description: [''],
    price: ['']
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('pid');
    this.currentProductId = productIdFromRoute as string;
    this.getProductDetail();
  }

  getProductDetail () {
    this.productService.getProductDetail(this.currentProductId).subscribe(res => {
      this.productForm.patchValue(res);
    })
  }

  onSave () {
    this.productService.updateProduct(this.currentProductId, this.productForm.value).subscribe(res => {
      alert('You have updated the product successfully.');
      this.router.navigateByUrl('/product-play');
    });
  }

}
