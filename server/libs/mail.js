import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';
import config from '../config/config';

const mailer = {
  transporter: nodemailer.createTransport({
    host: config.mail.nodemailer.host,
    port: config.mail.nodemailer.port,
    secure: true,
    auth: {
      user: config.mail.nodemailer.username,
      pass: config.mail.nodemailer.password,
    },
  }),

  mailGenerator: new Mailgen({
    theme: 'default',
    product: {
      name: 'Learn R',
      link: 'https://learnr.com/',
      logo: 'https://learnr.com/img/logo.png',
      copyright: '© 2022 Learn R. All Rights Reserved.',
    },
  }),
};

export default mailer;
