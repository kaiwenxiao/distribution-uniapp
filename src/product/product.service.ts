import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async searchAll(): Promise<ProductEntity[]> {
    return await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.links', 'link')
      .getMany();
  }

  async search(id: string): Promise<ProductEntity> {
    const product = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.links', 'link')
      .where('product.id = :id', { id })
      .getOne();
    if (!product) {
      throw new NotFoundError('product not found');
    }
    return product;
  }
}
