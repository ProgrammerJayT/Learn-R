/* eslint-disable class-methods-use-this */
/**
 * @author: Moobi Kabelo <@elregalo>
 */
import rateLimit from 'express-rate-limit';

class RequestLimiter {
  auth = () => rateLimit({
    windowMs: 60000 * 30, // 30min
    max: 50,
    message:
        'Too many password attempts from this IP, please try again after an hour.',
    standardHeaders: true,
    legacyHeaders: false,
  });

  register = () => rateLimit({
    windowMs: 60000 * 15, // 15min
    max: 4,
    message:
        'Too many password request from this IP, please try again after an hour',
    standardHeaders: true,
    legacyHeaders: false,
  });

  passwordReset = () => rateLimit({
    windowMs: 60000 * 5, // 5min
    max: 4,
    message:
        'Too many password request from this IP, please try again after an hour',
    standardHeaders: true,
    legacyHeaders: false,
  });
}

const requestLimiter = new RequestLimiter();

export default requestLimiter;
