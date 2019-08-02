import { Customer } from '../customers/customer.entity';
import { OrderProduct } from '../ordersProducts/orderProduct.entity';
export declare class Order {
    id: number;
    date: Date;
    customer: Customer;
    ordersProducts: OrderProduct[];
}
