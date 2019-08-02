import { Injectable, Post, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderDto } from '../dto/orderDto';
import { ProductsService } from '../products/products.service';
import { OrderProduct } from '../ordersProducts/orderProduct.entity';
import { OrdersProductsService } from '../ordersProducts/OrdersProducts.service';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderProductService: OrdersProductsService,
    private readonly productService: ProductsService,
    private readonly customerService: CustomersService,
  ) {}

  async create(dto: OrderDto): Promise<Order> {
    // Creating order products
    const ordersProducts: OrderProduct[] = [];
    for (const n of dto.productsIds) {
      const product = await this.productService.findOne(n);
      const orderProduct = new OrderProduct();
      orderProduct.price = product.price;
      orderProduct.product = product;
      ordersProducts.push(await this.orderProductService.save(orderProduct));
    }

    // Getting customer
    // Creating order
    const order = new Order();
    order.date = new Date();
    order.ordersProducts = ordersProducts;
    order.customer = await this.customerService.findOne(dto.customerId);

    return await this.orderRepository.save(order);
  }
}
