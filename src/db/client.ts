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

const extendedClient = new PrismaClient().$extends({});

export default extendedClient;
