import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';
import { Repository, getRepository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this..findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export default UsersRepository;
