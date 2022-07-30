/**
 * @author: Moobi Kabelo <@elregalo>
 */
import 'winston-daily-rotate-file';
import winston from 'winston';

class SystemLogger {
  error = winston.createLogger({
    name: 'error',
    level: 'error',
    json: true,
    transports: [
      new winston.transports.DailyRotateFile({
        filename: './logs/error-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
      }),
    ],
  });

  success = winston.createLogger({
    name: 'success',
    level: 'info',
    json: true,
    transports: [
      new winston.transports.DailyRotateFile({
        filename: './logs/success-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
      }),
    ],
  });
}

const logger = new SystemLogger();

export default logger;
