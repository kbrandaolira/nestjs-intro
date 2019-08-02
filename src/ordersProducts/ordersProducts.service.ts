import { Injectable } from '@nestjs/common';
import { OrderProduct } from './orderProduct.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersProductsService {
  constructor(
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
  ) {}

  async save(orderProduct: OrderProduct) {
    return await this.orderProductRepository.save(orderProduct);
  }
}
