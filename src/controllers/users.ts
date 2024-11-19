import { Request, Response, NextFunction } from 'express';
import * as model from '../models/users';

export function getDevices(
	request: Request,
	response: Response,
	next: NextFunction
) {
  const { id } = request.params;
  model.fetchDevices(id).then((data) => {
    response.json({
      success: true,
      data: data
    })
  })
}
