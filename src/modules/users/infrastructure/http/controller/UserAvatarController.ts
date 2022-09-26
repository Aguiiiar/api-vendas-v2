import { Request, Response } from 'express';
import UpdateUserAvatarService from '../../../services/UpdateUserAvatarService';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = container.resolve(UpdateUserAvatarService);

    const user = updateAvatar.handle({
      user_Id: request.user.id,
      avatarFilename: request.file?.filename as string,
    });

    return response.json(instanceToInstance(user));
  }
}

export default UserAvatarController;
