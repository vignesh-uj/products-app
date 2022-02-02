import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  currentProductId: string = '';
  currentProductName: string = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    this.currentProductName = routeParams.get('pname') as string;

    const productIdFromRoute = routeParams.get('pid');
    this.currentProductId = productIdFromRoute as string;

    
  }

}
