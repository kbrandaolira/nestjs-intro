import { Order } from './order.entity';
import { OrdersService } from './orders.service';
import { OrderDto } from '../dto/orderDto';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersService);
    create(dto: OrderDto): Promise<Order>;
}
