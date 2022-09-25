import { IOrderProducts } from '../../../orders/domain/models/IOrderProduct';
export interface IProduct {
  id: string;
  order_product?: IOrderProducts[];
  name: string;
  price: number;
  quantity: number;
  created_at: number;
  updated_at: number;
}
