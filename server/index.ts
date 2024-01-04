import express, { Application } from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter from './routes/index';
import connect_db from './database/connect';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
const port: number = 3001;

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
});

app.use('/', indexRouter);

connect_db();
