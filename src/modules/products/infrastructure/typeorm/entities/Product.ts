import OrdersProducts from '@modules/orders/infrastructure/typeorm/entities/OrdersProducts';
import { IProduct } from '../../../domain/models/IProduct';
import { IOrderProducts } from '../../../../orders/domain/models/IOrderProduct';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => OrdersProducts, order_product => order_product.product)
  order_product: IOrderProducts[];
  @Column('varchar')
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
