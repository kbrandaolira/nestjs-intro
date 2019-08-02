import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from '../dto/customerDto';
export declare class CustomersService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    private crypt;
    create(customer: Customer): Promise<Customer>;
    login(dto: CustomerDto): Promise<string | undefined>;
    private findOne;
}
