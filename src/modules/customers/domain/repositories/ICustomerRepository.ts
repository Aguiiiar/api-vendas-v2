import { ICustomer } from '../models/ICustomer';
import { ICreateCustomer } from '../models/ICreateCustomer';
import { ICustomerPaginate } from '../models/ICustomerPaginate';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface ICustomerRepository {
  findAll({ page, skip, take }: SearchParams): Promise<ICustomerPaginate>;
  findById(id: string): Promise<ICustomer | undefined>;
  findByName(name: string): Promise<ICustomer | undefined>;
  findByEmail(email: string): Promise<ICustomer | undefined>;
  create(data: ICreateCustomer): Promise<ICustomer>;
  save(customer: ICustomer): Promise<ICustomer>;
  remove(customer: ICustomer): Promise<void>;
}
