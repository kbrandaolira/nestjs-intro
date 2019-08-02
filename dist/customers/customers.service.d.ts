import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
export declare class CustomersService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    private crypt;
    create(customer: Customer): Promise<Customer>;
    login(customer: Customer): Promise<string | undefined>;
    findOne(id: number): Promise<Customer>;
    find(customer: Customer): Promise<Customer>;
}
