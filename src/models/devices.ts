import extendedClient from "../db/client";
import ICreateDevicePayload from "../interface/ICreateDevicePayload";

export async function createDevice(ownerId: string, devicePayload: ICreateDevicePayload) {
    return extendedClient.device.create({
        data: {
            owner_id: ownerId,
            name: devicePayload.name
        }
    }).then((data) => data)
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
