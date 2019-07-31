import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  cpf: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(type => Order, order => order.customer)
  orders: Order[];
}
