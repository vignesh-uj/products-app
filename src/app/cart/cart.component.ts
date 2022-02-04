import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }

}
