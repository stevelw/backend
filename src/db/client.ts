import { PrismaClient } from '@prisma/client';

import LastLocationType from '../type/LastLocationType';
import LocationHistoryType from '../type/LocationHistoryType';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace PrismaJson {
		type LastLocation = LastLocationType;
		type LocationHistory = LocationHistoryType;
	}
}

const extendedClient = new PrismaClient().$extends({
	model: {
		user: {
			async delete({ where }: { where: { id: string } }) {
				return extendedClient.user.update({
					where: { ...where },
					data: {
						deleted_at: new Date(),
					},
				});
			},
		},
		device: {
			async delete({ where }: { where: { id: string } }) {
				return extendedClient.device.update({
					where: { ...where },
					data: {
						deleted_at: new Date(),
					},
				});
			},
		},
		cat: {
			async delete({ where }: { where: { id: string } }) {
				return extendedClient.cat.update({
					where: { ...where },
					data: {
						deleted_at: new Date(),
					},
				});
			},
		},
	},
});

export default extendedClient;
