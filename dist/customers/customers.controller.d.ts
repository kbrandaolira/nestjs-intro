import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
export declare class CustomersController {
    private customerService;
    constructor(customerService: CustomersService);
    create(customer: Customer): Promise<Customer>;
    login(customer: Customer): Promise<string>;
}
