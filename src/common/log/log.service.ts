import { Injectable } from '@nestjs/common';
const logger = require('logger')();

process.env.NODE_ENV !== 'production' &&
  (logger.fatal = logger.warning = logger.notice = logger.trace = logger.debug = () => {});

@Injectable()
export class LogService {
  public fatal(msg) {
    logger.fatal(msg);
  }
  public warning(msg) {
    logger.warning(msg);
  }
  public notice(msg) {
    logger.notice(msg);
  }
  public trace(msg) {
    logger.trace(msg);
  }
  public debug(msg) {
    logger.debug(msg);
  }
}
