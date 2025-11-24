import { IsNumber, IsOptional } from 'class-validator';

export class CounterResponseDto {
  count: number;
  timestamp: string;
}

export class UpdateCounterDto {
  @IsNumber()
  @IsOptional()
  increment?: number;
}
