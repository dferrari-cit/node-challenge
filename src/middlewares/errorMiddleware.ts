import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError'

function errorMiddleware(err: Error, request: Request, response: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message} `,
  });
}

export { errorMiddleware };