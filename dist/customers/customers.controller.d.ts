import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CustomerDto } from '../dto/customerDto';
export declare class CustomersController {
    private customerService;
    constructor(customerService: CustomersService);
    create(customer: Customer): Promise<any>;
    login(dto: CustomerDto): Promise<any>;
    loginAsync(dto: CustomerDto): Promise<any>;
}
