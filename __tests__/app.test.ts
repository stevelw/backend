import app from '../src/app';
import server from '../src/server';
import request from 'supertest';

afterAll(() => {
	server.close();
});

describe('🧪 Express Application', () => {
	describe('GET /api', () => {
		it('200: should return a successful response', () => {
			return request(app)
				.get('/api')
				.expect(200)
				.then(({ body }) => {
					expect(body).toEqual({
						success: true,
					});
				});
		});
	});

	describe('GET /api/users/:id/devices', () => {
		const userWithDevices = 'cm3op7iwu0000jrcqa60tc9kv';
		const userWithoutDevices = 'cm3op7iww0001jrcqpq3qxx6i';

		it('200: should return the devices for a valid user with more than one device', () => {
			return request(app)
				.get(`/api/users/${userWithDevices}/devices`)
				.expect(200)
				.then(({ body: { success, data } }) => {
					expect(success).toBe(true);
					expect(data).not.toEqual([]);
				});
		});

		it('200: should return an empty array when given a valid user with no devices', () => {
			return request(app)
				.get(`/api/users/${userWithoutDevices}/devices`)
				.expect(200)
				.then(({ body: { success, data } }) => {
					expect(success).toBe(true);
					expect(data).toEqual([]);
				});
		});
	});
});
