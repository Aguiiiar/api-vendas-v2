import AppError from '@shared/infrastructure/http/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infrastructure/typeorm/entities/User';
import { IUserRepository } from '../domain/repositories/IUserRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  public async handle({ user_id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default ShowProfileService;
