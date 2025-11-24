import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterResponseDto, UpdateCounterDto } from './counter.dto';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  getCounter(): CounterResponseDto {
    return this.counterService.getCounter();
  }

  @Post('increment')
  increment(@Body() dto: UpdateCounterDto): CounterResponseDto {
    return this.counterService.increment(dto.increment);
  }

  @Post('decrement')
  decrement(@Body() dto: UpdateCounterDto): CounterResponseDto {
    return this.counterService.decrement(dto.increment);
  }

  @Delete('reset')
  reset(): CounterResponseDto {
    return this.counterService.reset();
  }
}
