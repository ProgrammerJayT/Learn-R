/* eslint-disable class-methods-use-this */
import mailer from '../libs/mail';

class AuthTemplate {
  welcome = (fullNames) => mailer.mailGenerator.generate({
    body: {
      title: 'Welcome To Learn R',
      intro: `Hi ${fullNames}, thank you for creating an account.`,
      action: {
        instructions: 'Enjoy our first ever virtual experience',
        button: {
          color: '#003650',
          text: 'Start Now',
          link: 'https://learnr.com/courses',
        },
      },
      outro: 'Didnt create an account ? Just ignore this email',
      signature: false,
    },
  });
}

const authTemplate = new AuthTemplate();
export default authTemplate;
