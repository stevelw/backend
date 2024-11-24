import extendedClient from '../db/client';

export function getUserById(id: string) {
	return extendedClient.user.findFirst({
		where: {
			id,
		},
	});
}

export function getUserByUsername(username: string) {
	return extendedClient.user.findFirst({
		where: {
			username,
		},
	});
}

export function updateUser(username: string, data: object) {
	return extendedClient.user.update({
		where: {
			username,
		},
		data,
	});
}
