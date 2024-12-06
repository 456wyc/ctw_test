import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min, Max, IsBoolean } from 'class-validator';

export class PagingQueryDTO {
  @ApiProperty({
    title: '页码',
    description: '分页查询页码',
    example: 1,
    default: 1,
    required: false,
    minimum: 1,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Min(1, { message: '页码必须为大于0的整数' })
  @Type(() => Number)
  page?: number = 1;

  @ApiProperty({
    title: '每页数量',
    description: '分页查询每页数量',
    minimum: 1,
    maximum: 100,
    example: 10,
    default: 10,
    required: false,
  })
  @IsInt()
  @Min(1, { message: '每页数量必须为大于0的整数' })
  @Max(100, { message: '每页数量须小于等于100' })
  @IsOptional()
  @Type(() => Number)
  size?: number = 10;

  @ApiProperty({
    title: '是否查询全部',
    example: false,
    default: false,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  query_all?: boolean = false;

  @ApiProperty({
    title: '排序字段',
    description: '排序字段',
    example: 'created_at',
    default: 'created_at',
    required: false,
  })
  orderBy?: string = 'created_at';

  @ApiProperty({
    title: '排序方式',
    description: '排序方式',
    example: 'asc',
    default: 'desc',
    required: false,
  })
  order?: 'asc' | 'desc' = 'desc';
}
