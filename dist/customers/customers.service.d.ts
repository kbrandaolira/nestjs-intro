import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from '../dto/customerDto';
export declare class CustomersService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    private bcrypt;
    create(customer: Customer): Promise<Customer>;
    login(dto: CustomerDto): Promise<{}>;
    private getCustomers;
    private validatePassword;
}
