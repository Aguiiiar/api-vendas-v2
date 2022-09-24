import { inject, injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import Customer from '../infrastructure/typeorm/entities/Customer';
import CustomerRepository from '../infrastructure/typeorm/repositories/CustomerRepository';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';
import { ICustomerPaginate } from '../domain/models/ICustomerPaginate';

interface SearchParams {
  page: number;
  limit: number;
}

@injectable()
class ListCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
  ) {}
  public async handle({
    page,
    limit,
  }: SearchParams): Promise<ICustomerPaginate> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const customers = await this.customersRepository.findAll({
      page,
      skip,
      take,
    });

    return customers;
  }
}

export default ListCustomerService;
