import { Customer } from '../customers/customer.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @ManyToOne(type => Customer, customer => customer.orders)
  customer: Customer;
}
