import AppError from '@shared/infrastructure/http/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Customer from '../infrastructure/typeorm/entities/Customer';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

interface IRequest {
  id: string;
}
@injectable()
class ShowCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomerRepository,
  ) {}
  public async handle({ id }: IRequest): Promise<Customer> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    return customer;
  }
}

export default ShowCustomerService;
