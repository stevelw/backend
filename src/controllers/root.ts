import { Request, Response } from 'express';
import endpointsJson from '../endpoints.json';

export function index(request: Request, response: Response) {
	response.status(200).json({
		success: true,
	});
}

export function endpoints(request: Request, response: Response) {
	const data = {};
	endpointsJson.forEach((endpoint) => {
		const copy = JSON.parse(JSON.stringify(endpoint));
		delete copy.path;
		Object.assign(data, {
			[endpoint.path]: {
				...copy,
			},
		});
	});

	response.status(200).json({
		success: true,
		data: data,
	});
}
