import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersProductsModule } from './ordersProducts/ordersProducts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductsModule,
    CustomersModule,
    OrdersModule,
    OrdersProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'study',
      username: 'postgres',
      password: 'orbita',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
