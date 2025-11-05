import { z } from 'zod';

const peselSchema = z
	.string()
	.length(11, 'PESEL musi mieć 11 cyfr')
	.regex(/^[0-9]+$/, 'PESEL może zawierać tylko cyfry');

function isValidPesel(pesel: string) {
	const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	let sum = 0;
	const controlNumber = parseInt(pesel.substring(10, 11));

	for (let i = 0; i < weight.length; i++) {
		sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
	}
	sum = sum % 10;
	return (10 - sum) % 10 === controlNumber;
}

export function validatePesel(pesel: string) {
	const result = peselSchema.safeParse(pesel);
	if (!result.success) {
		return {
			isValid: false,
			message: result.error.issues[0].message,
		};
	}

	if (!isValidPesel(pesel)) {
		return {
			isValid: false,
			message: 'Nieprawidłowa suma kontrolna PESEL',
		};
	}

	return {
		isValid: true,
		message: 'PESEL jest prawidłowy!',
	};
}
