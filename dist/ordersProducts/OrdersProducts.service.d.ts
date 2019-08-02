import { OrderProduct } from './orderProduct.entity';
import { Repository } from 'typeorm';
export declare class OrdersProductsService {
    private orderProductRepository;
    constructor(orderProductRepository: Repository<OrderProduct>);
    save(orderProduct: OrderProduct): Promise<OrderProduct>;
}
