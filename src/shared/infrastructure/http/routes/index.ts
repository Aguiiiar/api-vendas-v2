import { Router } from 'express';
import productsRouter from '@modules/products/infrastructure/http/routes/products.routes';
import customerRoutes from '@modules/customers/infrastructure/http/routes/customer.routes';
import passwordRoutes from '@modules/users/infrastructure/http/routes/password.routes';
import profileRoutes from '@modules/users/infrastructure/http/routes/profile.routes';
import sessionRoutes from '@modules/users/infrastructure/http/routes/sessions.routes';
import usersRouter from '@modules/users/infrastructure/http/routes/users.routes';
import orderRoutes from '@modules/orders/infrastructure/http/routes/order.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/profile', profileRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/password', passwordRoutes);
routes.use('/customers', customerRoutes);
routes.use('/orders', orderRoutes);

export default routes;
