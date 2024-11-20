import { Request, Response, NextFunction } from 'express';
import * as devices from '../models/devices';

export function getDevices(
	request: Request,
	response: Response,
	next: NextFunction
) {
  const { id } = request.params;
  devices.fetchDevicesByUserID(id).then((data) => {
    response.json({
      success: true,
      data: data
    })
  })
}
