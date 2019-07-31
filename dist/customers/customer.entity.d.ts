import { Order } from '../orders/order.entity';
export declare class Customer {
    id: number;
    name: string;
    cpf: string;
    email: string;
    password: string;
    orders: Order[];
}
