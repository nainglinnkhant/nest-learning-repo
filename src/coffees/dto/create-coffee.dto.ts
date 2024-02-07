import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of a coffee.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({
    description: 'The flavors of a coffee',
    example: ['caramel', 'vanilla'],
  })
  @IsString({ each: true })
  readonly flavors: string[];
}
