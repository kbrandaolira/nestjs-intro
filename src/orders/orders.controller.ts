import { Controller, Post, Body } from '@nestjs/common';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Controller('/orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post('/orders')
  create(@Body() order: Order) {}
}
