import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTrafficOverviewComponent } from './customer-traffic-overview/customer-traffic-overview.component';



@NgModule({
  declarations: [
    CustomerTrafficOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerTrafficOverviewComponent
  ]
})
export class CustomerTrafficModule { }
