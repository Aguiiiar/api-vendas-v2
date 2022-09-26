import AppError from '@shared/infrastructure/http/errors/AppError';
import EtherealMailer from '@config/mail/EtherealMailer';
import path from 'path';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { IUserTokenRepository } from '../domain/repositories/IUserTokenRepository';

@injectable()
class SendForgotPasswordService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokenRepository,
  ) {}
  public async handle(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    console.log(token);
    await EtherealMailer.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[API Vendas] - Recuperação de senha solicitado.',
      templateData: {
        template: forgotPasswordTemplate,
        // template: `Olá, {{name}}. <a href="/teste" target="_blank">Recuperar senha</a>`,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/api/v1/password/reset_password?token=${token}`,
        },
      },
    });
  }
}

export default SendForgotPasswordService;
