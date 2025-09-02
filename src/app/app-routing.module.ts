import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path : 'customer', component:CustomerComponent},
  {path : 'menu', component:MenuComponent},
  {path : 'order', component:OrderComponent},
  {path : 'delivery', component:DeliveryComponent},
  {path : 'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
