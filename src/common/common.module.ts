import { Module } from '@nestjs/common';
import { OrmModule } from './orm/orm.module';
import { LogModule } from './log/log.module';
import { ExceptionModule } from './exception/exception.module';
import { ValidateModule } from './validate/validate.module';
import { RedisModule } from './redis/redis.module';

const CommonModules = [
  OrmModule,
  LogModule,
  ExceptionModule,
  ValidateModule,
  RedisModule
];

@Module({
  imports: CommonModules
})
export class Common {}
