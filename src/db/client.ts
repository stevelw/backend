import { PrismaClient } from '@prisma/client';

import CoordinateObjectType from '../type/CoordinateObjectType';
import LocationHistoryType from '../type/LocationHistoryType';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace PrismaJson {
		type LastLocation = CoordinateObjectType;
		type LocationHistory = LocationHistoryType;
	}
}

const extendedClient = new PrismaClient().$extends({});

export default extendedClient;
