import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource } from '../pg-source';
import app from './app';

const PORT = process.env.PORT || 5333;

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connected🔗');

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}💧`);
        });
    } catch (err: any) {
        console.error('Database connection failed ❌', err.message, err.stack);
    }
};

startServer();
