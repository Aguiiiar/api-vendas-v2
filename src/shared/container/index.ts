import { container } from 'tsyringe';

import CustomerRepository from '@modules/customers/infrastructure/typeorm/repositories/CustomerRepository';
import { ICustomerRepository } from '@modules/customers/domain/repositories/ICustomerRepository';
import { IOrdersRepository } from '@modules/orders/domain/repositories/IOrderRepository';
import { OrdersRepository } from '@modules/orders/infrastructure/typeorm/repositories/OrdersRepository';
import { IProductsRepository } from '@modules/products/domain/repositories/IProductReposity';
import ProductsRepository from '@modules/products/infrastructure/typeorm/repositories/ProductsRepository';

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductRepository',
  ProductsRepository,
);
