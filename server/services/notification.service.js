import authTemplate from '../templates/auth.template';
import mailer from '../libs/mail';

class NotificationService {
  // eslint-disable-next-line class-methods-use-this
  sendWelcomeEmail = (fullNames, email) => {
    mailer.transporter.sendMail({
      from: 'admin@learn.com',
      to: email,
      subject: 'Welcome To LearnR',
      html: authTemplate.welcome(fullNames),
    });
  };
}

const notificationService = new NotificationService();
export default notificationService;
