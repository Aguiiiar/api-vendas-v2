import logger from '@shared/lib/logger';
import app from './app';
const port = process.env.PORT;

app.listen(port, () => {
  logger.info(`Server started on port ${port}! 🏆`);
});
