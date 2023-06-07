import { Controller, Param, Post, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/search_all')
  searchAll(): Promise<ProductEntity[]> {
    return this.productService.searchAll();
  }

  @Get('/search/:id')
  search(@Param('id') id: string): Promise<ProductEntity> {
    return this.productService.search(id);
  }
}
