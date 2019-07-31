import { Order } from '../orders/order.entity';
import { Product } from '../products/product.entity';
export declare class OrderProduct {
    id: number;
    price: number;
    order: Order;
    product: Product;
}
