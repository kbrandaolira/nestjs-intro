import { Controller, Body, Post, HttpCode } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() customer: Customer): Promise<Customer> {
    return await this.customerService.create(customer);
  }

  @Post('/login')
  async login(@Body() customer: Customer): Promise<string> {
    return await this.customerService.login(customer);
  }
}
