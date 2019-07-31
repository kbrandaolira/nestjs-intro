import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Order } from '../orders/order.entity';
import { Product } from '../products/product.entity';

@Entity('order_product')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;
  @ManyToOne(type => Order, order => order.ordersProducts)
  order: Order;
  @ManyToOne(type => Product, product => product.ordersProducts)
  product: Product;
}
