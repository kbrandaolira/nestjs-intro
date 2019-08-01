import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsNotEmpty()
  name: string;
  @Column()
  @IsNotEmpty()
  cpf: string;
  @Column()
  @IsEmail()
  email: string;
  @Column()
  @IsNotEmpty()
  password: string;
  @OneToMany(type => Order, order => order.customer)
  orders: Order[];
}
