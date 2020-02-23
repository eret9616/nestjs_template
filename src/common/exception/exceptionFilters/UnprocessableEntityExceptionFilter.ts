import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnprocessableEntityException,
  HttpStatus
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnprocessableEntityException)
export class UnprocessableEntityExceptionFilter
  implements ExceptionFilter<UnprocessableEntityException> {
  catch(exception: UnprocessableEntityException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const {
      message: { message: message }
    } = exception;

    response.status(HttpStatus.OK).json({
      errNo: 1,
      errStr: message
    } as CommonResponse.FailResponse);
  }
}
