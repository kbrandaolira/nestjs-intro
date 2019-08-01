import { Repository } from 'typeorm';
import { Order } from './order.entity';
export declare class OrdersService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    create(order: Order): void;
}
