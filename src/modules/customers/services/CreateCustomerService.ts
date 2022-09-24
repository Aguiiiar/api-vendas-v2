import AppError from '@shared/infrastructure/http/errors/AppError';
import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';
import { ICreateCustomer } from '../domain/models/ICreateCustomer';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
  ) {}
  public async handle({ name, email }: ICreateCustomer): Promise<ICustomer> {
    const emailExists = await this.customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const customer = this.customersRepository.create({
      name,
      email,
    });

    return customer;
  }
}

export default CreateCustomerService;
