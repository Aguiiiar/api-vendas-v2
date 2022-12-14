import CustomersController from '../controller/CustomersController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '@shared/infrastructure/http/middlewares/isAuthenticated';

const customerRoutes = Router();
const customerController = new CustomersController();

customerRoutes.use(isAuthenticated);

customerRoutes.get('/', customerController.index);

customerRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  customerController.show,
);
customerRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }),
  }),
  customerController.create,
);
customerRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }),
  }),
  customerController.update,
);
customerRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  customerController.delete,
);

export default customerRoutes;
