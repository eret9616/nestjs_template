import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './services/tag.service';
import { TagCatalogService } from './services/tag-catalog.service';

// entities
import { CatalogModule } from '@entity/userPortraitConnection/Catalog/Catalog.module';

@Module({
  imports: [CatalogModule],
  providers: [TagService, TagCatalogService],
  controllers: [TagController]
})
export class TagModule {}
