import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Link } from './link.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToMany(() => Link, (link) => link.product)
  // links: Link[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;
}
