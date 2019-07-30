import { ProductsService } from './products.service';
import { Product } from './product.entity';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: any): Promise<any>;
    create(product: Product): Promise<any>;
    update(id: any, product: Product): Promise<any>;
    delete(id: any): Promise<any>;
}
