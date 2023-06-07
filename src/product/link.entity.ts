import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @ManyToOne(() => ProductEntity, (product) => product.links)
  product: ProductEntity;
}
