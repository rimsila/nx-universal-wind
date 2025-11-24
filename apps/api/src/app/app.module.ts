import { Module } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';

@Module({
  imports: [],
  controllers: [CounterController],
  providers: [CounterService],
})
export class AppModule {}
