import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../services/cart.service';
import { CommonService } from '../services/common.service';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  title  = 'Hello World';

  constructor(private cartService: CartService, private commonService: CommonService) {

  }

  
  share(selectedProduct: any) {
    debugger;
    window.alert(`The product ${selectedProduct.name} has been shared!`);
  }

  onNotifyClick (evt: string) {
    alert(evt);
  }

  addNameToList () {

    this.cartService.addToCart({
      id: 10003,
      name: 'ABCD',
      description: 'ABCD',
      price: 2000
    });


    this.commonService.addToNames('Mohan');


  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/