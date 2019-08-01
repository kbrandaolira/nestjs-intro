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
const customer_entity_1 = require("./customer.entity");
const typeorm_2 = require("typeorm");
let CustomersService = class CustomersService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
        this.bcrypt = require('bcrypt');
    }
    create(customer) {
        customer.password = this.bcrypt.hashSync(customer.password, 10);
        return this.customerRepository.save(customer);
    }
    login(dto) {
        return new Promise((resolve, reject) => {
            this.getCustomers(dto).then(customers => {
                if (customers.length > 0) {
                    resolve(this.validatePassword(dto.password, customers[0].password));
                }
            });
        });
    }
    getCustomers(dto) {
        return new Promise((resolve, reject) => {
            resolve(this.customerRepository.find({
                where: { email: dto.email },
            }));
        });
    }
    validatePassword(password, encryptedPassword) {
        return new Promise((resolve, reject) => {
            resolve(this.bcrypt.compareSync(password, encryptedPassword));
        });
    }
};
CustomersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map