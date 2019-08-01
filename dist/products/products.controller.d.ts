import { ProductsService } from './products.service';
import { Product } from './product.entity';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: any): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: any, product: Product): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
