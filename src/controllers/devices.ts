import { Request, Response, NextFunction } from "express";
import * as devices from '../models/devices';

export function createDevice(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.headers.authorization)
    return next({ status: 401, message: "You are not authorized" });

  const username = request.headers.authorization;

  devices.createDevice(username).then((device) => {
    response.status(201).json({ success: true, data: device })
  })
}
