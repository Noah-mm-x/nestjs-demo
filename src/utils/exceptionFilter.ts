import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { getUTCEightTimeStamp } from '@utils/index';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status: any = exception.getStatus();
    const message: any = exception.getResponse();
    const msg =
      'Object' === Object.prototype.toString.call(message).slice(8, -1)
        ? message.msg
        : message;
    const errorResponse = {
      code: status,
      msg: msg,
      timestamp: getUTCEightTimeStamp(),
      path: request.url,
    };

    response.status(status).json(errorResponse);
  }
}
