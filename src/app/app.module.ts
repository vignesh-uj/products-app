import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CompDemoComponent } from './comp-demo/comp-demo.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { MissionControlComponent } from './missioncontrol/missioncontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { RupeesPipe } from './pipes/rupees.pipe';
import { SizerComponent } from './sizer/sizer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomerDirective } from './directives/zoomer.directive';
import { UnlessDirective } from './directives/unless.directive';
import { MissionService } from './services/mission.service';

import { TheRouterModule } from './the-router/the-router.module';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UsersObservablesComponent } from './users-observables/users-observables.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TheRouterModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CompDemoComponent,
    ChildCompComponent,
    MissionControlComponent,
    AstronautComponent,
    RupeesPipe,
    SizerComponent,
    HighlightDirective,
    ZoomerDirective,
    UnlessDirective,
    BreadCrumbComponent,
    RegistrationComponent,
    ProductinfoComponent,
    AddProductComponent,
    EditProductComponent,
    UsersObservablesComponent,
    AddUserComponent,
    ListUserComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MissionService
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/