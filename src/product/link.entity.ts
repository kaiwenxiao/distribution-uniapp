import { Column, Entity } from 'typeorm';
// import { Product } from './product.entity';

@Entity()
export class Link {
  @Column()
  id: number;

  @Column()
  link: string;

  // @ManyToOne(() => Product, (product) => product.links)
  // product: Product;
}
