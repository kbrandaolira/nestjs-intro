import { OrderProduct } from '../ordersProducts/orderProduct.entity';
export declare class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    ordersProducts: OrderProduct[];
}
