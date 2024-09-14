import { AppErrorType } from "AppError";
import { NextFunction, Request, Response } from "express";

export function handleErrors(error: AppErrorType | Error, req: Request, res: Response, next: NextFunction) {
  if('statusCode' in error) {
    return res.status(error.statusCode).json({ message: error.message, status: 'error' });
  }

  return res.status(500).json({
    message: 'Internal server error',
    status: 'error'
  });
}
