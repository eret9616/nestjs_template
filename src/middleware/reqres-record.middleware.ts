import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
const logger = require('logger')();

@Injectable()
export class RecordMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function): Promise<any> {
    const { hostname, originalUrl, method, headers, query } = req;
    const reqObj = `${method}\n Request => origin: ${hostname},url: ${originalUrl},data: ${JSON.stringify(
      query
    )},header: ${JSON.stringify(headers)}`;
    // const oldWrite = res.write;
    const oldEnd = res.end;
    const chunks = [];
    let body = {};
    let resObj = '';
    res.end = function(chunk) {
      if (chunk) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks).toString('utf8');
      oldEnd.apply(res, arguments);
      const matchReg = /^2\d{2}|3\d{2}$/;
      if (matchReg.test(res.statusCode + '')) {
        resObj = `Response => ${JSON.stringify(body)}`;
        logger.notice(`\n${reqObj}\n ${resObj}\n`);
      } else {
        logger.fatal(`\n${reqObj}\n ${resObj}\n`);
      }
    };
    next();
  }
}
