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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const order_entity_1 = require("../orders/order.entity");
const product_entity_1 = require("../products/product.entity");
let OrderProduct = class OrderProduct {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderProduct.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderProduct.prototype, "price", void 0);
__decorate([
    typeorm_1.ManyToOne(type => order_entity_1.Order, order => order.ordersProducts),
    __metadata("design:type", order_entity_1.Order)
], OrderProduct.prototype, "order", void 0);
__decorate([
    typeorm_1.ManyToOne(type => product_entity_1.Product, product => product.ordersProducts),
    __metadata("design:type", product_entity_1.Product)
], OrderProduct.prototype, "product", void 0);
OrderProduct = __decorate([
    typeorm_1.Entity('order_product')
], OrderProduct);
exports.OrderProduct = OrderProduct;
//# sourceMappingURL=orderProduct.entity.js.map