import { Request, Response, NextFunction } from 'express';
import * as users from '../models/users';

export default function usernameAuth(
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (!request.headers.authorization) {
		response
			.status(401)
			.json({ success: false, message: 'You are not authorized' });
		return;
	}

	users.getUserByUsername(request.headers.authorization!).then((user) => {
		if (!user) {
			response
				.status(401)
				.json({ success: false, message: 'You have passed an invalid user' });
			return;
		}
		next(user);
	});
}
