import AppError from '@shared/infrastructure/http/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import Customer from '../infrastructure/typeorm/entities/Customer';
import CustomerRepository from '../infrastructure/typeorm/repositories/CustomerRepository';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

@injectable()
class UpdateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
  ) {}
  public async handle({ id, name, email }: IRequest): Promise<Customer> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    const customerExists = await this.customersRepository.findByEmail(email);

    if (customerExists && customer.email !== email) {
      throw new AppError('There is already one customer with this e-mail.');
    }

    customer.name = name;
    customer.email = email;

    await this.customersRepository.save(customer);

    return customer;
  }
}

export default UpdateCustomerService;
