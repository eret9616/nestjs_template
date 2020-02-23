import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { CustomValidationPipe } from './validate.pipe';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: CustomValidationPipe
    }
  ]
})
export class ValidateModule {}
