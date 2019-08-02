import { Controller, Post, Body } from '@nestjs/common';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';
import { OrderDto } from '../dto/orderDto';

@Controller('/orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  async create(@Body() dto: OrderDto): Promise<Order> {
    return await this.orderService.create(dto);
  }
}
