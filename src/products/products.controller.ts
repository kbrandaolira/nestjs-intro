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
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }

  @Put(':id')
  update(@Param('id') id, @Body() product: Product) {
    product.id = Number(id);
    return this.productsService.update(product);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.productsService.delete(id);
  }
}
