import { Request, Response } from 'express';
import * as devices from '../models/devices';
import * as cats from '../models/cats';

export function getDevices(request: Request, response: Response) {
	const { id } = request.params;
	devices.fetchDevicesByUserID(id).then((data) => {
		response.json({
			success: true,
			data: data,
		});
	});
}

export function getCats(request: Request, response: Response) {
	const { id } = request.params;
	cats.fetchCatsByUserID(id).then((data) => {
		response.json({
			success: true,
			data: data,
		});
	});
}
