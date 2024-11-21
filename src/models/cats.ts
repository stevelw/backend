import extendedClient from '../db/client';

export async function createCat(
	id: string,
	parameters?: {
		name?: string;
		description?: string;
		picture_url?: string;
	}
) {
	return extendedClient.user
		.findFirst({
			where: {
				id: id,
			},
		})
		.then((user) => {
			if (!user) throw new Error(`user does not exist`);
			return extendedClient.cat.create({
				data: {
					owner_id: user.id,
					...parameters,
				},
			});
		});
}

export async function fetchCatsByUserID(id: string) {
	return extendedClient.cat
		.findMany({
			where: {
				owner_id: id,
			},
		})
		.then((data) => data);
}

export async function updateCat(id: string, payload: object) {
	return extendedClient.cat.update({
		where: {
			id: id,
		},
		data: {
			...payload,
		},
	});
}
