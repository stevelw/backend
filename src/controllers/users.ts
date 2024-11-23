import { Request, Response, NextFunction } from 'express';
import * as devices from '../models/devices';
import * as cats from '../models/cats';
import * as users from '../models/users';
import validator from '../utils/validator';

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

export function getUser(req: Request, res: Response) {
	const id: string = req.headers.authorization ?? '';

	users
		.getUserById(id)
		.then((user) => {
			res.status(200).json({ sucess: true, data: user });
		})
		.catch(() => {
			res.status(500).send({ msg: 'An internal server error occurred' });
		});
}

export function updateUser(req: Request, res: Response, next: NextFunction) {
	const schema = {
		requested_privacy: 'string',
	};
	const payload = req.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	const id: string = req.headers.authorization ?? '';

	users
		.updateUser(id, req.body)
		.then((updatedUser) => {
			res.status(200).json({ sucess: true, data: updatedUser });
		})
		.catch(() => {
			res.status(500).send({ msg: 'An internal server error occurred' });
		});
}
