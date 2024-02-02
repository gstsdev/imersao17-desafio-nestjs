import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateOrderDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  asset_id: string;

  @MaxLength(5)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  asset_symbol?: string;

  @IsNumber()
  @IsPositive()
  price: number;
}
