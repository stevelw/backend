import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seeder() {
	const user1 = await prisma.user.upsert({
		where: { username: 'user1' },
		update: {},
		create: {
			id: 'cm3op7iwu0000jrcqa60tc9kv',
			username: 'user1',
		},
	});

	await prisma.user.upsert({
		where: { username: 'user2' },
		update: {},
		create: {
			id: 'cm3op7iww0001jrcqpq3qxx6i',
			username: 'user2',
		},
	});

	const device1 = await prisma.device.upsert({
		where: { uuid: '5804f943-4aaf-432f-83d8-62028827ac57' },
		update: {},
		create: {
			name: 'Tiddles Collar',
			owner_id: user1.id,
			uuid: '5804f943-4aaf-432f-83d8-62028827ac57',
		},
	});

	const device2 = await prisma.device.upsert({
		where: { uuid: '36932d18-78a2-4ceb-b979-64a5ed441551' },
		update: {},
		create: {
			name: 'A Collar',
			owner_id: user1.id,
			uuid: '36932d18-78a2-4ceb-b979-64a5ed441551',
		},
	});

	// cm3pyzthe000108jka5f7hw99

	await prisma.cat.upsert({
		where: { id: 'cm3pr1rkb000008l8fs7icr9g' },
		update: {},
		create: {
			id: 'cm3pr1rkb000008l8fs7icr9g',
			name: 'Mr Tiddles',
			owner_id: user1.id,
			device_id: device1.id,
		},
	});

	await prisma.cat.upsert({
		where: { id: 'cm3pz1t0v000308jka8bl7x25' },
		update: {},
		create: {
			id: 'cm3pz1t0v000308jka8bl7x25',
			name: 'Daisy, Destroy of Life',
			owner_id: user1.id,
			device_id: device2.id,
		},
	});
}

if (require.main === module) {
	seeder()
		.then(async () => await prisma.$disconnect)
		.catch(async (e) => {
			console.error(e);
			await prisma.$disconnect();
			process.exit(1);
		});
}

export default seeder;
