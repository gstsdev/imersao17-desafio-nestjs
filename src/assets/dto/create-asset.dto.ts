import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAssetDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  id: string;

  @MaxLength(5)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  symbol: string;
}
