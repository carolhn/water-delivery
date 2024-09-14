import cors from 'cors';
import express from 'express';
import { handleErrors } from './api/middleware/error';
import { routes } from './api/routes';

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)

app.use(handleErrors)

export default app;
