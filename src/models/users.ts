import extendedClient from '../db/client';

export function getUserByUsername(username: string) {
	return extendedClient.user.findFirst({
		where: {
			username: username,
		},
	});
}
