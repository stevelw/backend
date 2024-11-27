import extendedClient from '../db/client';

export async function createDevice(username: string) {
	return extendedClient.user
		.findFirst({
			where: {
				username: username,
			},
		})
		.then((user) => {
			if (!user) throw new Error(`user does not exist`);
			return extendedClient.device.create({
				data: {
					owner_id: user.id,
				},
			});
		});
}

export async function fetchDevicesByUserID(id: string) {
	return extendedClient.device
		.findMany({
			where: {
				owner_id: id,
			},
		})
		.then((data) => data);
}

export async function updateDevice(
	uuid: string,
	data: { lat: number; lon: number }
) {
	const currentInformation = await extendedClient.device.findFirst({
		include: {
			cat: true,
		},
		where: {
			uuid: uuid,
		},
	});

	if (!currentInformation) throw new Error('unregistered device');

	const history = currentInformation.location_history;

	if (
		currentInformation.last_location.lat &&
		currentInformation.last_location.lon
	) {
		history.push({
			lat: currentInformation.last_location.lat,
			lon: currentInformation.last_location.lon,
			timestamp: currentInformation.last_pulse_at!.toISOString(),
		});
		// We have previous data. Lets push it to the history before we overwrite
	}

	return extendedClient.device.update({
		where: {
			uuid: uuid,
		},
		data: {
			last_pulse_at: new Date(),
			last_location: { lat: data.lat, lon: data.lon },
			location_history: history,
		},
		include: {
			cat: true,
		},
	});
}

export function deleteDevice(id: string) {
	return extendedClient.device.delete({
		where: {
			id: id,
		},
	});
}

export async function getDeviceLocationHistory(
	device_uuid: string,
	count: number = -1
) {
	const data = await extendedClient.device.findFirst({
		where: {
			uuid: device_uuid,
		},
	});
	return count === -1
		? data?.location_history.slice(0, count)
		: data?.location_history;
}
