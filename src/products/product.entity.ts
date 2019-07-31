import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderProduct } from '../ordersProducts/orderProduct.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column('decimal', { precision: 5, scale: 2 })
  price: number;
  @OneToMany(type => OrderProduct, orderProduct => orderProduct.product)
  ordersProducts: OrderProduct[];
}
