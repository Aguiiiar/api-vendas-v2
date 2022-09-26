import AppError from '@shared/infrastructure/http/errors/AppError';
import { hashSync } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import User from '../infrastructure/typeorm/entities/User';
import { IUserRepository } from '../domain/repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}
  public async handle({ name, email, password }: IRequest): Promise<User> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashPassword = hashSync(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export default CreateUserService;
