import { getCustomRepository } from 'typeorm';
import User from '../infrastructure/typeorm/entities/User';
import UsersRepository from '../infrastructure/typeorm/repositories/UsersRepository';

class ListUserService {
  public async handle(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();

    return users;
  }
}

export default ListUserService;
