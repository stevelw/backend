import IStringObject from '../interface/IStringObject';

export default function validator(
	payload: IStringObject,
	schema: IStringObject
): { success: boolean; errors: string[]; body: Record<string, any> } {
	// eslint-disable-line @typescript-eslint/no-explicit-any
	const result: { success: boolean; errors: string[]; body: object } = {
		success: true,
		errors: [],
		body: {},
	};

	Object.keys(schema).forEach((key) => {
		let expectedValue: string | string[] = schema[key].split(',');
		let isOptional = false;

		if (expectedValue.includes('optional')) {
			isOptional = true;
			expectedValue.splice(expectedValue.indexOf('optional'), 1);
		}

		expectedValue = expectedValue[0];

		if (!payload[key] && !isOptional)
			return result.errors.push(`${key} does not exist on payload`);

		if (typeof payload[key] !== expectedValue && !(isOptional && !payload[key]))
			return result.errors.push(
				`${key} is invalid - expected ${expectedValue}, got ${typeof payload[
					key
				]}`
			);

		Object.assign(result.body, { [key]: payload[key] });
	});

	if (result.errors.length !== 0) result.success = false;
	return result;
}
