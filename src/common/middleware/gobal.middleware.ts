import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getUTCEight, getUTCEightTimeStamp } from '@utils/index';

@Injectable()
export class GobalMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('开始请求', getUTCEight(), getUTCEightTimeStamp());
    // console.log(req, res);
    next();
    console.log('结束请求', getUTCEight());
  }
}
