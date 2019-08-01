import { Controller, Body, Post, Req } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CustomerDto } from '../dto/customerDto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post()
  create(@Body() customer: Customer): Promise<any> {
    return this.customerService.create(customer);
  }

  @Post('/login')
  login(@Body() dto: CustomerDto): Promise<any> {
    return this.customerService.login(dto);
  }

  @Post('/loginAsync')
  loginAsync(@Body() dto: CustomerDto) {
    return this.customerService.loginAsync(dto);
  }
}
