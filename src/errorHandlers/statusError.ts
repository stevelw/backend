import { Request, Response, NextFunction } from "express";

export default function statusError(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error.status && error.message) {
    return response
      .status(error.status)
      .json({ success: false, message: error.message });
  }
  next();
}
