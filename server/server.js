/**
 * @desc -
 */
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import ip from 'ip';
// eslint-disable-next-line import/extensions
import { errorLog, successLog } from './utils/logger.js';
import database from './libs/database';
import studentRoutes from './routes/student.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

database.mongo
  .then(() => {
    successLog.info('Connected to MongoDB');
  })
  .catch((MongoError) => {
    errorLog.error(`MongoDB connection error: ${MongoError}`);
  });

app.use('/api/student', studentRoutes);

app.listen(PORT, () => {
  successLog.info(`Server Started: http://${ip.address()}:${PORT}`);
});
