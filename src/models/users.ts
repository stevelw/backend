import extendedClient from "../db/client";

export async function fetchDevices(id: string) {
    return extendedClient.device.findMany({
        where: {
            owner_id: id
        }
    }).then(data => data)
}