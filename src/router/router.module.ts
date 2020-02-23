import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserPortraitModule } from './userportrait/userportrait.module';
import { RecordMiddleware } from '@/middleware/reqres-record.middleware';

const RouterModules = [UserPortraitModule];

@Module({
  imports: RouterModules
})
export class Router {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        process.env.NODE_ENV === 'production' && RecordMiddleware
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
