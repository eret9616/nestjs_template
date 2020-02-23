// import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
// import {
//   TreeMode,
//   NodeDropType
// } from '@/router/userportrait/modules/tag/services/tag-catalog.service';

// // PascalCase
// export class TreeDto {
//   @IsNumber()
//   readonly pattern: number;
//   @IsString()
//   @IsOptional()
//   readonly tagName?: string;
//   @IsString()
//   @IsOptional()
//   readonly mode?: TreeMode;
//   @IsNumber()
//   @IsOptional()
//   readonly showRoot?: number;
//   @IsBoolean()
//   @IsOptional()
//   readonly filterNew?: boolean;
// }

// export class GetDefaultTagsDto {
//   @IsNumber()
//   readonly pattern: number;
// }

// export class MoveTreeNodeDto {
//   @IsNumber()
//   readonly targetID: number;
//   @IsNumber()
//   readonly destinationID: number;
//   @IsString()
//   readonly actionType: NodeDropType;
// }

// export class UpdateTreeNodeDto {
//   @IsNumber()
//   readonly cid: number;
//   @IsString()
//   readonly name: string;
// }

// export class DeleteTreeNodeDto {
//   @IsNumber()
//   readonly cid: number;
// }

// export class CreateTreeNodeDto {
//   @IsNumber()
//   readonly parentID: number;
//   @IsString()
//   readonly name: string;
//   @IsNumber()
//   readonly pattern: number;
// }

// export class GetTagDto {
//   @IsNumber()
//   readonly id: number;
// }

// export class GetDetailDto {
//   @IsNumber()
//   id: number;
//   @IsNumber()
//   pattern: number;
// }

// export class UpdateTagDto {
//   @IsNumber()
//   id: number;
//   @IsString()
//   @IsOptional()
//   name: string;
//   @IsNumber()
//   @IsOptional()
//   showStatus;
//   @IsString()
//   @IsOptional()
//   define;
// }

// export class ExportTagsEntities {
//   @IsString()
//   pattern;
// }
