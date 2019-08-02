import { Controller, Post, Body } from '@nestjs/common';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Controller('/orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  // criar pedido com seu consumidor e itens
  @Post('/orders')
  async create(@Body() order: Order): Promise<Order> {
    return await this.orderService.create(order);
  }
}
