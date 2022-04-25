import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    private httpAdapter: AbstractHttpAdapter;
    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();
   
    const {status, body} = exception instanceof HttpException ?
    {
      status: exception.getStatus(),
      body: {
            statusCode: exception.getStatus(),
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.path
        }
    } :
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      body: {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server error',
        timestamp: new Date().toISOString(),
        path: request.path
      }
    }
    
    this.httpAdapter.reply(response, body, status);
  }
}
