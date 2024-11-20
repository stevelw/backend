import { Request, Response } from 'express';
import * as devices from '../models/devices';

export function getDevices(request: Request, response: Response) {
	const { id } = request.params;
	devices.fetchDevicesByUserID(id).then((data) => {
		response.json({
			success: true,
			data: data,
		});
	});
}
