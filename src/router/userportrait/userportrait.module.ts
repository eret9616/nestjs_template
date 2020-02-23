import { Module } from '@nestjs/common';
import { TagModule } from './modules/tag/tag.module';

@Module({
  imports: [TagModule]
})
export class UserPortraitModule {}
