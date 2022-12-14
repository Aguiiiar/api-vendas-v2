import { Request, Response } from 'express';
import ResetPasswordService from '@modules/users/services/ResetPasswordService';
import { container } from 'tsyringe';

class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;
    const resetPassword = container.resolve(ResetPasswordService);

    await resetPassword.handle({ password, token });

    return response.status(204).json();
  }
}

export default ResetPasswordController;
