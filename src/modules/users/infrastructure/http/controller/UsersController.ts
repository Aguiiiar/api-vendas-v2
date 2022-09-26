import { Request, Response } from 'express';
import CreateUserService from '../../../services/CreateUserService';
import ListUserService from '../../../services/ListUserService';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const listUsers = container.resolve(ListUserService);

    console.log(request.user.id);
    const users = await listUsers.handle({ page, limit });

    return response.json(instanceToInstance(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUsers = container.resolve(CreateUserService);

    const user = await createUsers.handle({ name, email, password });

    return response.json(instanceToInstance(user));
  }
}

export default UsersController;
