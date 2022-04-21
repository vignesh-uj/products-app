import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { ShippingComponent } from '../shipping/shipping.component';
import { CompDemoComponent } from '../comp-demo/comp-demo.component';
import { MissionControlComponent } from '../missioncontrol/missioncontrol.component';
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard/customer-dashboard.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/details/:pid/:pname', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'component-demo', component: CompDemoComponent },
  { path: 'mission-control', component: MissionControlComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'register', component: RegistrationComponent },
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TheRouterModule { }