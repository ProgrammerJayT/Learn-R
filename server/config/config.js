/**
 * @desc -
 */
import dotenv from 'dotenv';

dotenv.config();

const config = {
  auth: {
    apiKey: process.env.API_KEY,
    jwtKey: process.env.JWT_KEY,
  },
  database: {
    mongoUrl: process.env.MONGO_URL,
  },
  mail: {
    nodemailer: {
      username: process.env.NODEMAILER_USERNAME,
      password: process.env.NODEMAILER_PASSWORD,
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
    },
  },
};

export default config;
