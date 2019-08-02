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
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() product: Product) {
    return await this.productsService.save(product);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() product: Product) {
    product.id = Number(id);
    return await this.productsService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.productsService.delete(id);
  }
}
