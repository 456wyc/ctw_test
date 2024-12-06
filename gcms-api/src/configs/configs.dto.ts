import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { PagingQueryDTO } from 'src/common/common.dto';

export class ConfigCreateDTO {
  @ApiProperty({})
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({})
  @IsString()
  @Length(1, 200)
  desc?: string;
}

export class ConfigUpdateDTO extends PartialType(ConfigCreateDTO) {}

export class ConfigListQueryDTO extends IntersectionType(
  PagingQueryDTO,
  PartialType(PickType(ConfigCreateDTO, ['name', 'desc'] as const)),
) {}
