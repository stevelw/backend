import { PrismaClient } from "@prisma/client";

const extendedClient = new PrismaClient().$extends({});
type extendedClientType = typeof extendedClient;

export default extendedClient;
