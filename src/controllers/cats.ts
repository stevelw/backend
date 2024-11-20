import { Request, Response, NextFunction } from 'express';
import validator from '../utils/validator';
import * as cats from '../models/cats';

export function createCat(
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (!request.headers.authorization)
		return next({ status: 401, message: 'You are not authorized' });

	const username = request.headers.authorization;

	const schema = {
		name: 'string,optional',
		description: 'string,optional',
		picture_url: 'string,optional',
	};
	const payload = request.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	cats.createCat(username, result.body).then((cat) => {
		return response.status(201).json({ success: true, data: cat });
	});
}
