import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {


  @Input()
  product?: Product;

  @Output()
  notify: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNotifyTodayClick() {
    const dataToPass = 'The product ' + this.product?.name +  ' will be notified Today';
    this.notify.emit(dataToPass);
  }

  onNotifyNextTimeClick() {
    const dataToPass = 'The product ' + this.product?.name +  ' will be notified Next time';
    this.notify.emit(dataToPass);
  }

}
