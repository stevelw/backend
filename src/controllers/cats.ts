import { Request, Response, NextFunction } from 'express';
import validator from '../utils/validator';
import * as cats from '../models/cats';
import { type User } from '@prisma/client';

export function createCat(
	user: User,
	request: Request,
	response: Response,
	next: NextFunction
) {
	const schema = {
		name: 'string,optional',
		description: 'string,optional',
		picture_url: 'string,optional',
	};
	const payload = request.body;
	const result = validator(payload, schema);

	if (!result.success) return next({ status: 400, message: result.errors });

	cats.createCat(user.username, result.body).then((cat) => {
		return response.status(201).json({ success: true, data: cat });
	});
}

// export function updateCat(
// 	user: User,
// 	request: Request,
// 	response: Response,
// 	next: NextFunction
// ) {
// 	// TODO
// }
