import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PlatformSchedule } from './services/platform.schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [PlatformSchedule]
})
export class Schedule {}
