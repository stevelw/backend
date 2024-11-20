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

	await prisma.device.upsert({
		where: { uuid: '5804f943-4aaf-432f-83d8-62028827ac57' },
		update: {},
		create: {
			name: 'Tiddles Collar',
			owner_id: user1.id,
			uuid: '5804f943-4aaf-432f-83d8-62028827ac57',
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
