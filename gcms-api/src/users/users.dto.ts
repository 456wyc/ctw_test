import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { PagingQueryDTO } from 'src/common/common.dto';

export class UserLoginDTO {
  @ApiProperty({})
  @IsEmail()
  email: string;

  @ApiProperty({})
  @IsString()
  @Length(8, 20)
  password: string;
}
