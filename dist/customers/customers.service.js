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
const crypt_1 = require("../utils/crypt");
let CustomersService = class CustomersService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
        this.crypt = new crypt_1.Crypt();
    }
    create(customer) {
        customer.password = this.crypt.execute(customer.password);
        return this.customerRepository.save(customer);
    }
    async login(dto) {
        const customer = await this.findOne(dto);
        if (customer && this.crypt.compare(dto.password, customer.password)) {
            return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
        }
        else {
            throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async findOne(dto) {
        return await this.customerRepository.findOne({
            where: {
                email: dto.email,
            },
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