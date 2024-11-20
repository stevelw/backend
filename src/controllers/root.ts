import { Request, Response, NextFunction } from "express";

export function index(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(200).json({
    success: true,
  });
}

export function endpoints(request: Request, response: Response) {
  response.status(200).json({
    success: true,
  });
}
