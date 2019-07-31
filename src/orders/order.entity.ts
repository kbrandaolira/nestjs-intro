import { Customer } from '../customers/customer.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { OrderProduct } from '../ordersProducts/orderProduct.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @ManyToOne(type => Customer, customer => customer.orders)
  customer: Customer;
  @OneToMany(type => OrderProduct, orderProduct => orderProduct.order)
  ordersProducts: OrderProduct;
}
