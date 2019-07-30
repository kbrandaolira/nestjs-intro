import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<any> {
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<any> {
    return this.productsService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() product: Product): Promise<any> {
    product.id = Number(id);
    return this.productsService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.productsService.delete(id);
  }
}
