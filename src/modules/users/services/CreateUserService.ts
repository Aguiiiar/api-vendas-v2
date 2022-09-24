import AppError from '@shared/infrastructure/http/errors/AppError';
import { hashSync } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../infrastructure/typeorm/entities/User';
import UsersRepository from '../infrastructure/typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async handle({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashPassword = hashSync(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashPassword,
    });
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
