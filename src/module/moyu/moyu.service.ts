import { Injectable } from '@nestjs/common';
import { StatusCode } from '@statusCode/index';
import { getResult } from '@utils/dateHander';
import { Output } from '@common/interfaces/gobal.interfaces';
@Injectable()
export class MoyuService {
  // constructor() {}
  async getInfo(): Promise<Output> {
    const result: string = getResult();
    return {
      code: StatusCode['SUCCESS'],
      data: {
        result,
      },
      msg: '成功',
    };
  }
}
