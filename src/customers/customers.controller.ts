import {
  Controller,
  Body,
  Post,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CustomerDto } from '../dto/customerDto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() customer: Customer): Promise<any> {
    return this.customerService.create(customer);
  }

  @Post('/login')
  login(@Body() dto: CustomerDto): Promise<string> {
    return this.customerService.login(dto);
  }
}
