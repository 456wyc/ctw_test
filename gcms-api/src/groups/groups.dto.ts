import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { PagingQueryDTO } from 'src/common/common.dto';

export class GroupCreateDTO {
  @ApiProperty({
    example: 'group1',
    description: 'Group name',
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    example: 'type1',
    description: 'Group type',
  })
  type?: string;

  @ApiProperty({
    example: '',
    description: 'Group description',
  })
  @IsString()
  @Length(1, 200)
  desc?: string;
}

export class GroupUpdateDTO extends PartialType(GroupCreateDTO) {}

export class GroupListQueryDTO extends IntersectionType(
  PagingQueryDTO,
  PartialType(PickType(GroupCreateDTO, ['name', 'desc', 'type'] as const)),
) {}
