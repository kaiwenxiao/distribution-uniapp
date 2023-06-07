import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LinkEntity } from './link.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LinkEntity, (link) => link.product)
  links: LinkEntity[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;
}
