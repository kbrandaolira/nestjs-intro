import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderDto } from '../dto/orderDto';
import { ProductsService } from '../products/products.service';
import { OrdersProductsService } from '../ordersProducts/OrdersProducts.service';
import { CustomersService } from '../customers/customers.service';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly orderProductService;
    private readonly productService;
    private readonly customerService;
    constructor(orderRepository: Repository<Order>, orderProductService: OrdersProductsService, productService: ProductsService, customerService: CustomersService);
    create(dto: OrderDto): Promise<Order>;
}
