import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct?: Product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { 

  }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = Number(routeParams.get('pid'));
    
    this.currentProduct = products.find(prod => prod.id === productIdFromRoute);
    
  }
  
  addToCart() {
    if (this.currentProduct) {
      this.cartService.addToCart(this.currentProduct);
      window.alert('Your product has been added to the cart!');
    }
  }

}
