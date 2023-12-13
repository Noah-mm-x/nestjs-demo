import { Module } from '@nestjs/common';
import { MoyuController } from './moyu.controller';
import { MoyuService } from './moyu.service';

@Module({
  controllers: [MoyuController],
  providers: [MoyuService],
  exports: [MoyuService],
})
export class MoyuModule {}
