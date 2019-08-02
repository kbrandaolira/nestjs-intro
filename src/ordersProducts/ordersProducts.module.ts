import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './orderProduct.entity';
import { OrdersProductsService } from './OrdersProducts.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct])],
  providers: [OrdersProductsService],
  exports: [OrdersProductsService],
})
export class OrdersProductsModule {}
