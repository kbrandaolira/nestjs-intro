import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from '../dto/customerDto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  private bcrypt = require('bcrypt');

  // create customer =)
  create(customer: Customer): Promise<Customer> {
    customer.password = this.bcrypt.hashSync(customer.password, 10);
    return this.customerRepository.save(customer);
  }

  // execute customer login
  login(dto: CustomerDto) {
    return new Promise((resolve, reject) => {
      this.getCustomers(dto).then(customers => {
        if (customers.length > 0) {
          resolve(this.validatePassword(dto.password, customers[0].password));
        }
      });
    });
  }

  // filter customer by dto
  private getCustomers(dto: CustomerDto): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(
        this.customerRepository.find({
          where: { email: dto.email },
        }),
      );
    });
  }

  // validate password :O
  private validatePassword(password: string, encryptedPassword: string) {
    return new Promise((resolve, reject) => {
      resolve(this.bcrypt.compareSync(password, encryptedPassword));
    });
  }
}
