/**
 * @desc -
 */
import validator from 'validator';

class ValidatorService {
  // eslint-disable-next-line class-methods-use-this
  isEmail = (email) => new Promise((resolve, reject) => {
    if (validator.isEmail(email)) {
      resolve(email);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Invalid email.');
    }
  });

  // eslint-disable-next-line class-methods-use-this
  isPassword = (password, confirmPassword) => new Promise((resolve, reject) => {
    if (password !== confirmPassword) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Password doesnt match.');
    } else if (confirmPassword.length < 8) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Sorry, password must be at least 8 characters long.');
    } else if (
      !confirmPassword.match(/[a-z]/g)
        || !confirmPassword.match(/[A-Z]/g)
        || !confirmPassword.match(/[0-9]/g)
    ) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(
        'Password must contain at least one lowercase letter, one uppercase letter, and one number.',
      );
    } else {
      resolve(confirmPassword);
    }
  });
}

const validate = new ValidatorService();

export default validate;
