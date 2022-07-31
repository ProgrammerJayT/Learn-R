/**
 * @desc -
 */
import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';
import config from '../config/config';

const database = {
  mongo: mongoose.connect(config.database.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  sequelize: new Sequelize(
    config.database.mysql.database,
    config.database.mysql.username,
    config.database.mysql.password,
    {
      host: config.database.mysql.host,
      dialect: 'mariadb',
    },
  ),
};

export default database;
