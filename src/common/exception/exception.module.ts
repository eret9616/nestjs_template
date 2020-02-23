import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { BadRequestExceptionFilter } from './exceptionFilters/BadRequestExceptionFilter';
import { UnprocessableEntityExceptionFilter } from './exceptionFilters/UnprocessableEntityExceptionFilter';
import { QueryFailedExceptionFilter } from './exceptionFilters/QueryFailedExceptionFilter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: QueryFailedExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: UnprocessableEntityExceptionFilter
    }
  ]
})
export class ExceptionModule {}
