import validator from '../src/utils/validator';

describe('🧪 Validator', () => {
	const schema = {
		username: 'string',
		password: 'string',
		email: 'string,optional',
		age: 'number,optional',
	};
	const validPayload = {
		username: 'admin',
		password: 'password',
		email: 'admin@jeepies.codes',
	};
	const validPayloadWithOptionals = {
		username: 'admin',
		password: 'password',
	};
	const invalidPayload = {
		username: 'admin',
		email: 'admin@jeepies.codes',
	};
	const invalidTypePayload = {
		username: 'admin',
		email: 'admin@jeepies.codes',
		age: 'what?',
	};
	it('should return when given a valid payload', () => {
		const result = validator(validPayload, schema);
		expect(result.success).toBe(true);
		expect(result.errors).toEqual([]);
	});
	it('should return when given a valid payload with optionals', () => {
		const result = validator(validPayloadWithOptionals, schema);
		expect(result.success).toBe(true);
		expect(result.errors).toEqual([]);
	});
	it('should return when given an invalid payload', () => {
		const result = validator(invalidPayload, schema);
		expect(result.success).toBe(false);
		expect(result.errors).toEqual(['password does not exist on payload']);
	});
	it('should return when given an invalid type on a payload', () => {
		const result = validator(invalidTypePayload, schema);
		expect(result.success).toBe(false);
		expect(result.errors).toEqual([
			'password does not exist on payload',
			'age is invalid - expected number, got string',
		]);
	});
});
