import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: any): Promise<Product>;
    save(product: Product): Promise<Product>;
    update(product: Product): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
