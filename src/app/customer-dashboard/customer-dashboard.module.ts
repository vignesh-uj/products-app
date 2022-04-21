import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerTrafficModule } from '../customer-traffic/customer-traffic.module';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerOverviewComponent
  ],
  imports: [
    CommonModule,
    CustomerTrafficModule
  ],
  exports: [
    CustomerDashboardComponent
  ]
})
export class CustomerDashboardModule { }
