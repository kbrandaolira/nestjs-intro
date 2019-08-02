"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./order.entity");
const products_service_1 = require("../products/products.service");
const orderProduct_entity_1 = require("../ordersProducts/orderProduct.entity");
const OrdersProducts_service_1 = require("../ordersProducts/OrdersProducts.service");
const customers_service_1 = require("../customers/customers.service");
let OrdersService = class OrdersService {
    constructor(orderRepository, orderProductService, productService, customerService) {
        this.orderRepository = orderRepository;
        this.orderProductService = orderProductService;
        this.productService = productService;
        this.customerService = customerService;
    }
    async create(dto) {
        const ordersProducts = [];
        for (const n of dto.productsIds) {
            const product = await this.productService.findOne(n);
            const orderProduct = new orderProduct_entity_1.OrderProduct();
            orderProduct.price = product.price;
            orderProduct.product = product;
            ordersProducts.push(await this.orderProductService.save(orderProduct));
        }
        const order = new order_entity_1.Order();
        order.date = new Date();
        order.ordersProducts = ordersProducts;
        order.customer = await this.customerService.findOne(dto.customerId);
        return await this.orderRepository.save(order);
    }
};
OrdersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        OrdersProducts_service_1.OrdersProductsService,
        products_service_1.ProductsService,
        customers_service_1.CustomersService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map