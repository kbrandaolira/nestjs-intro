import { Order } from './order.entity';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersService);
    create(order: Order): Promise<Order>;
}
