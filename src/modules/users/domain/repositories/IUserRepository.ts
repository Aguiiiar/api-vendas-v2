import { IUser } from '../models/IUser';
import { IPaginateUser } from '../models/IPaginateUser';
import { ICreateUser } from '../models/ICreateUser';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};
export interface IUserRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IPaginateUser>;
  findByName(name: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  create(data: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
}
