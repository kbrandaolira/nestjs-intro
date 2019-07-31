"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const products_module_1 = require("./products/products.module");
const customers_module_1 = require("./customers/customers.module");
const orders_module_1 = require("./orders/orders.module");
const ordersProducts_module_1 = require("./ordersProducts/ordersProducts.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            products_module_1.ProductsModule,
            customers_module_1.CustomersModule,
            orders_module_1.OrdersModule,
            ordersProducts_module_1.OrdersProductsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                database: 'study',
                username: 'postgres',
                password: 'orbita',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map