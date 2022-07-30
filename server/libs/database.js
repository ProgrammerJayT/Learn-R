/**
 * @desc -
 */
import mongoose from 'mongoose';
import config from '../config/config';

const database = {
  mongo: mongoose.connect(config.database.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
};

export default database;
