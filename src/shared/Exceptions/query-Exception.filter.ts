import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Request, Response } from 'express';
import { Errors } from './enums/eng-errors.enum';

@Catch(QueryFailedError)
export class QueryExceptionFilter implements ExceptionFilter {
    catch(err: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        if (
            err.code === Errors.DUPLICATION ||
            err.code === Errors.DUPLICATION_REFERENCE
        ) {
            response.status(HttpStatus.CONFLICT).json({
                statusCode: HttpStatus.CONFLICT,
                errorCode: Errors.CONFLICT,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        } else if (
            err.code === Errors.ROW_IS_REFERENCED ||
            err.code === Errors.KEY_IS_REFERENCED
        ) {
            response.status(HttpStatus.CONFLICT).json({
                statusCode: HttpStatus.CONFLICT,
                errorCode: Errors.REFERENCED,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        } else {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                errorCode: Errors.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        }
    }
}
