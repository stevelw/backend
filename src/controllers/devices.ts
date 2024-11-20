import { Request, Response, NextFunction } from 'express';
import validator from '../utils/validator';
import * as devices from '../models/devices';
import { type User } from '@prisma/client';

export function createDevice(
	user: User,
	request: Request,
	response: Response,
	next: NextFunction
) {
	devices
		.createDevice(user.username)
		.then((device) => {
			return response.status(201).json({ success: true, data: device });
		})
		.catch(() =>
			next({ status: 500, message: 'An internal server error occurred' })
		);
}

export function postUpdate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const schema = {
		id: 'string',
		lat: 'number',
		lon: 'number',
		accuracy: 'number,optional',
		sat: 'string,optional',
		batt: 'number,optional',
	};
	const payload = request.body.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	const copy = JSON.parse(JSON.stringify(result.body));
	delete copy.id;

	devices.updateDevice(result.body.id, copy).then(() => {
		response.status(204).send();
	});
}

export function deleteDevice(
	user: User,
	request: Request,
	response: Response,
	next: NextFunction
) {
	const schema = {
		device_uuid: 'string',
	};
	const payload = request.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	devices.fetchDevicesByUserID(user.id).then((usersDevices) => {
		const device = usersDevices.filter(
			(device) => device.uuid === payload.device_uuid
		)[0];
		devices.deleteDevice(device.id).then(() => {
			return response.status(204).send();
		});
	});
}
