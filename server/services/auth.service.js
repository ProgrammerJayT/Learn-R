import jwt from 'jsonwebtoken';
import speakeasy from 'speakeasy';
import ms from 'ms';
import config from '../config/config';

class AuthService {
  constructor() {
    this.jwtExpireDate = ms('3d');
    this.speakEasySec = speakeasy.generateSecret({
      length: 20,
    }).base32;
  }

  generateToken = (id, username, role) => jwt.sign(
    {
      id,
      username,
      role,
    },
    config.auth.jwtKey,
    {
      expiresIn: this.jwtExpireDate,
    },
  );

  generateOtp = () => speakeasy.generateSecret({
    secret: this.speakEasySec,
    encoding: 'base32',
    digits: 6,
    step: 900,
    window: 10,
  });
}

const authService = new AuthService();
export default authService;
