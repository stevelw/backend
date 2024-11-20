import extendedClient from "../db/client";

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
