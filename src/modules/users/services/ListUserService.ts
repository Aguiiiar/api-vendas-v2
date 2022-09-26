import { getCustomRepository } from 'typeorm';
import User from '../infrastructure/typeorm/entities/User';
import UsersRepository from '../infrastructure/typeorm/repositories/UsersRepository';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { IPaginateUser } from '../domain/models/IPaginateUser';

interface SearchParams {
  page: number;
  limit: number;
}
@injectable()
class ListUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}
  public async handle({ page, limit }: SearchParams): Promise<IPaginateUser> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const users = await this.usersRepository.findAll({
      page,
      skip,
      take,
    });

    return users;
  }
}

export default ListUserService;
