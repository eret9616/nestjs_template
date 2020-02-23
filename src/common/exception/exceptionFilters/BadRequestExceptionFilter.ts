import {
  Inject,
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  HttpStatus
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LogService } from '@/common/log/log.service';

// exception for request body
@Catch(BadRequestException)
export class BadRequestExceptionFilter
  implements ExceptionFilter<BadRequestException> {
  constructor(@Inject('LogService') private readonly logger: LogService) {}

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log(
      '----------------------------------------------------------------'
    );
    console.log(
      '%s %s error: %s',
      request.method,
      request.url,
      exception.message
    );
    console.log(
      '----------------------------------------------------------------'
    );

    const { method, url } = request;
    const {
      message: { message: message }
    } = exception;

    this.logger.warning(`${method} ${url} error: ${message}`);

    response.status(HttpStatus.OK).json({
      errNo: 1,
      errStr: message
    } as CommonResponse.FailResponse);
  }
}
