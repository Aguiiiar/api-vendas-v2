import AppError from '@shared/infrastructure/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../infrastructure/typeorm/entities/Product';
import { ProductRepository } from '../infrastructure/typeorm/repositories/ProductRepository';

class ShowProductService {
  public async handle(id: string): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default ShowProductService;
