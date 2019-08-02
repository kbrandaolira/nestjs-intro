import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from '../dto/customerDto';
import { Crypt } from '../utils/crypt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  private crypt = new Crypt();

  create(customer: Customer) {
    customer.password = this.crypt.execute(customer.password);
    return this.customerRepository.save(customer);
  }

  async login(dto: CustomerDto): Promise<string | undefined> {
    const customer = await this.findOne(dto);
    if (customer && this.crypt.compare(dto.password, customer.password)) {
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
    } else {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  private async findOne(dto: CustomerDto): Promise<Customer> {
    return await this.customerRepository.findOne({
      where: {
        email: dto.email,
      },
    });
  }
}
