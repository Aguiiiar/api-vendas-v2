import AppError from '@shared/infrastructure/http/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../infrastructure/typeorm/repositories/CustomerRepository';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
  ) {}
  public async handle({ id }: IRequest) {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    await this.customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
