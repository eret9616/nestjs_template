// import { Inject } from '@nestjs/common';
// import { Timeout } from '@nestjs/schedule';
// import { app } from '@/main';
// import { PSCoreService } from '@/router/platform/modules/pscore/services/service';
// import { LogService } from '@/common/log/log.service';

// export class PlatformSchedule {
//   constructor(@Inject('LogService') private readonly logger: LogService) {}

//   @Timeout(10000)
//   async cachingSearchInfoSummaryTimeout() {
//     const pscoreservice = app.get(PSCoreService);         // 获取 service
//     // 有环境变量才跑定时任务
//     if (process.env.PS_core_schedule && process.env.NODE_ENV === 'production') {
//       await pscoreservice.job();
//     }
//   }
// }
