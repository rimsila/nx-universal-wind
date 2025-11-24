import { Injectable } from '@nestjs/common';
import { CounterResponseDto } from './counter.dto';

@Injectable()
export class CounterService {
  private count = 0;

  getCounter(): CounterResponseDto {
    return {
      count: this.count,
      timestamp: new Date().toISOString(),
    };
  }

  increment(value: number = 1): CounterResponseDto {
    this.count += value;
    return this.getCounter();
  }

  decrement(value: number = 1): CounterResponseDto {
    this.count -= value;
    return this.getCounter();
  }

  reset(): CounterResponseDto {
    this.count = 0;
    return this.getCounter();
  }
}
