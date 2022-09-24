export default {
  type: process.env.POSTGRES_TYPE,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['./src/modules/**/infrastructure/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infrastructure/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infrastructure/shared/typeorm/migrations',
  },
};
