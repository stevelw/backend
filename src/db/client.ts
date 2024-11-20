import { PrismaClient } from "@prisma/client";

import LastLocationType from "../type/LastLocationType";
import LocationHistoryType from "../type/LocationHistoryType";

declare global {
  namespace PrismaJson {
    type LastLocation = LastLocationType;
    type LocationHistory = LocationHistoryType;
  }
}

const extendedClient = new PrismaClient().$extends({});
type extendedClientType = typeof extendedClient;

export default extendedClient;
