import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
