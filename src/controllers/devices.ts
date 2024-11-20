import { Request, Response, NextFunction } from 'express';
import * as devices from '../models/devices';
import * as users from '../models/users';
import validator from '../utils/validator';

export function createDevice(
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (!request.headers.authorization)
		return next({ status: 401, message: 'You are not authorized' });

	const username = request.headers.authorization;

	devices.createDevice(username).then((device) => {
		response.status(201).json({ success: true, data: device });
	});
}

export function postUpdate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (!request.headers.authorization)
		return next({ status: 401, message: 'You are not authorized' });

	const deviceID = request.headers.authorization;

	const schema = {
		lat: 'number',
		lon: 'number',
		accuracy: 'number,optional',
		sat: 'string,optional',
		batt: 'number,optional',
	};
	const payload = request.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	devices.updateDevice(deviceID, payload).then(() => {
		return response.status(204).send();
	});
}

export function deleteDevice(
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (!request.headers.authorization)
		return next({ status: 401, message: 'You are not authorized' });

	const username = request.headers.authorization;

	const schema = {
		device_uuid: 'string',
	};
	const payload = request.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	users
		.getUserByUsername(username)
		.then(async (user) => {
			if (!user) throw new Error('User does not exist');
			const usersDevices = await devices.fetchDevicesByUserID(user.id);
			const device = usersDevices.filter(
				(device) => device.uuid === payload.device_uuid
			)[0];
			devices.deleteDevice(device.id).then(() => {
				return response.status(204).send();
			});
		})
		.catch((e) => next({ status: 401, message: e }));
}
