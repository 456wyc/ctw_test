import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { PagingQueryDTO } from 'src/common/common.dto';

export class ClientCreateDTO {
  @ApiProperty({})
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({})
  @IsString()
  @Length(1, 50)
  envId: string;
}

export class ClientUpdateDTO extends PartialType(ClientCreateDTO) {}

export class ClientListQueryDTO extends IntersectionType(
  PagingQueryDTO,
  PartialType(PickType(ClientCreateDTO, ['name', 'envId'] as const)),
) {}
