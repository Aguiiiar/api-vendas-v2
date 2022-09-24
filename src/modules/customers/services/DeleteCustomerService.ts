import AppError from '@shared/infrastructure/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../infrastructure/typeorm/repositories/CustomerRepository';

interface IRequest {
  id: string;
}
class DeleteCustomerService {
  public async handle({ id }: IRequest) {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
