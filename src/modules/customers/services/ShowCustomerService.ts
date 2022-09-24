import AppError from '@shared/infrastructure/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../infrastructure/typeorm/entities/Customer';
import CustomerRepository from '../infrastructure/typeorm/repositories/CustomerRepository';

interface IRequest {
  id: string;
}

class ShowCustomerService {
  public async handle({ id }: IRequest): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);
    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    return customer;
  }
}

export default ShowCustomerService;
