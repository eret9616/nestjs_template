import {
  Controller,
  Post,
  HttpCode,
  Body,
} from '@nestjs/common';
import {
  TagService,
  TagMap,
} from './services/tag.service';
import { NodeType, TagCatalogService } from './services/tag-catalog.service';
import {
  TreeDto,
} from './dtos/tag.dto';

@Controller('tag')
export class TagController {
  constructor(
    private readonly tagService: TagService,
    private readonly tagCatalogService: TagCatalogService
  ) {}

  // 1 获取标签树
  @Post('tree')
  @HttpCode(200)
  async tree(@Body() dto: TreeDto): Promise<CommonResponse.SuccessResponse> {
    const { pattern, mode, showRoot, filterNew, tagName } = dto;
    const tags = await this.tagService.getTags();
    const catalogs = await this.tagCatalogService.getCatalogs({
      pattern,
      tagName
    });
    const tagsMap: TagMap = new Map();
    tags.forEach(tag => {
      tagsMap.set(tag.id, tag);
    });
    let tree = this.tagCatalogService.buildTree(
      catalogs,
      tagsMap,
      mode,
      filterNew
    );
    if (showRoot) {
      tree = [
        {
          id: 0,
          cid: 0,
          order: 0,
          parentID: -1,
          nodeType: NodeType.Catalog,
          label: pattern === 1 ? 'UID标签' : 'CUID标签',
          pattern,
          children: tree
        }
      ];
    }
    // 将目录列表构建成树形结构
    return Promise.resolve({ errNo: 0, errStr: 'success', data: { tree } });
  }
}
