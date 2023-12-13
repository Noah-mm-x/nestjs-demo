import { Controller, Get } from '@nestjs/common';
import { MoyuService } from './moyu.service';
import { Output } from '@common/interfaces/gobal.interfaces';
@Controller('moyu')
export class MoyuController {
  constructor(private readonly moyuService: MoyuService) {}
  @Get('info')
  getPerson(): Promise<Output> {
    return this.moyuService.getInfo();
  }
}
