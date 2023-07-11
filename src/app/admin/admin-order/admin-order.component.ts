import { Component, OnInit } from '@angular/core';
import { IOrderResponse } from 'src/app/shared/interfaces/order/order.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  public adminOrders!: IOrderResponse[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  // load new orders
  loadOrders(): void {
    this.orderService.getAll()
      .subscribe(data => {
        this.adminOrders = data as IOrderResponse[];
      })
  }

}
