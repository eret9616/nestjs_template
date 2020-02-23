import { Logger } from '@nestjs/common';
const logger = require('logger')();

class ExtendBuildinLogger extends Logger {
  constructor() {
    super();
  }
  // nest内置方法
  public log(msg: string) {
    // 打印到console中
    super.log(msg);
    logger.notice(msg);
  }
  public error(msg: string, trace: string) {
    super.error(msg, trace);
    logger.fatal(`${msg} ---> ${trace}`);
  }
  public warn(msg: string) {
    super.warn(msg);
    logger.warning(msg);
  }
  public debug(msg: string) {
    super.debug(msg);
    logger.debug(msg);
  }
  public verbose(msg: string) {
    super.verbose(msg);
    logger.trace(msg);
  }
}

export const ExtendBuildinLogging =
  process.env.NODE_ENV === 'production' ? ExtendBuildinLogger : Logger;
