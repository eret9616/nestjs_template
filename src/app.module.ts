import { Module } from '@nestjs/common';

import { Common } from './common/common.module';
import { Router } from './router/router.module';
import { Schedule } from './tasks/schedule.module';

@Module({
  imports: [Common, Router, Schedule]
})
export class AppModule {}
