import { Request, Response, NextFunction } from 'express';
import validator from '../utils/validator';
import * as devices from '../models/devices';
import * as cats from '../models/cats';
import { type User } from '@prisma/client';
import coordsToScore from '../utils/coordsToScore';
import calculateLevelsAndXP from '../utils/calculateLevelAndXP';

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

export async function postUpdate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const schema = {
		id: 'string',
		lat: 'number',
		lon: 'number',
	};
	const payload = request.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	const copy = JSON.parse(JSON.stringify(result.body));
	delete copy.id;

	try {
		const device = await devices.updateDevice(result.body.id, copy);
		const lastHistory = await devices.getDeviceLocationHistory(
			result.body.id,
			1
		);
		if (!lastHistory) {
			response.status(204);
			return;
		} // This is the first request, don't add XP as the cat has traveled 0 points
		const lastUpdate = lastHistory[0];
		const points = coordsToScore([
			[result.body.lat, result.body.lon],
			[lastUpdate.lat, lastUpdate.lon],
		]);
		const { xp, level } = calculateLevelsAndXP(points);
		await cats.increaseLevelAndXP(device.cat!.id, level, xp);
		response.status(204).send();
	} catch {
		next({ status: 500, message: 'An internal server error occurred' });
	}
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
