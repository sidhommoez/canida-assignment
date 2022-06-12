import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

import { Errors } from './enums/eng-errors.enum';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        let message = (exception.getResponse() as any).message;

        // if (Array.isArray(message)) {
        //     message = message[0];
        // }

        // const msg: keyof typeof Errors = message.toUpperCase();
      
        response.status(status).send({
            statusCode: status,
            errors: Errors[message],
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
