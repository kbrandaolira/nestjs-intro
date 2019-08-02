import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { Crypt } from '../utils/crypt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  private crypt = new Crypt();

  async create(customer: Customer) {
    customer.password = this.crypt.execute(customer.password);
    return await this.customerRepository.save(customer);
  }

  async login(customer: Customer): Promise<string | undefined> {
    const customerFound = await this.find(customer);
    if (
      customerFound &&
      this.crypt.compare(customer.password, customerFound.password)
    ) {
      // Adicionar JWT
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
    } else {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  async findOne(id: number): Promise<Customer> {
    return await this.customerRepository.findOne(id);
  }

  async find(customer: Customer): Promise<Customer> {
    return await this.customerRepository.findOne({
      where: {
        email: customer.email,
      },
    });
  }
}
