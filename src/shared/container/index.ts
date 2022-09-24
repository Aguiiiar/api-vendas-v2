import { container } from 'tsyringe';

import CustomerRepository from '@modules/customers/infrastructure/typeorm/repositories/CustomerRepository';
import { ICustomerRepository } from '@modules/customers/domain/repositories/ICustomerRepository';

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository,
);
