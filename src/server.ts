import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource } from '../pg-source';
import app from './app';

const PORT = process.env.PORT || 5333;

AppDataSource.initialize().then(() => {
  console.log('Database connected🔗');

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}💧`);
  });
}).catch((err) => {
  console.error('Database connection failed❌', err);
});
