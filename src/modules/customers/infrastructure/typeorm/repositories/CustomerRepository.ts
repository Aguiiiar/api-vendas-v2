import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';
import { ICustomerRepository } from '@modules/customers/domain/repositories/ICustomerRepository';

@EntityRepository(Customer)
class CustomerRepository
  extends Repository<Customer>
  implements ICustomerRepository
{
  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.findOne({
      where: {
        id,
      },
    });

    return customer;
  }

  public async findByName(name: string): Promise<Customer | undefined> {
    const customer = await this.findOne({
      where: {
        name,
      },
    });

    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.findOne({
      where: {
        email,
      },
    });

    return customer;
  }
}

export default CustomerRepository;
