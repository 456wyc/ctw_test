import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { PagingQueryDTO } from 'src/common/common.dto';

export class EnvCreateDTO {
  @ApiProperty({
    example: 'production',
    description: 'Environment name',
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    example: 'This is a production environment',
    description: 'Environment description',
  })
  @IsString()
  @Length(1, 200)
  desc?: string;
}

export class EnvUpdateDTO extends PartialType(EnvCreateDTO) {}

export class EnvListQueryDTO extends IntersectionType(
  PagingQueryDTO,
  PartialType(PickType(EnvCreateDTO, ['name', 'desc'] as const)),
) {}
