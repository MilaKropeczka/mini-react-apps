import { validatePesel } from './validatePesel';

describe('validatePesel', () => {
	test('valid PESEL numbers', () => {
		expect(validatePesel('98110148596').isValid).toBe(true);
		expect(validatePesel('02070803628').isValid).toBe(true);
	});

	test('invalid PESEL numbers', () => {
		expect(validatePesel('44051401357').isValid).toBe(false);
		expect(validatePesel('43051401237').isValid).toBe(false);
		expect(validatePesel('0207080627').isValid).toBe(false);
		expect(validatePesel('1234ó678900').isValid).toBe(false);
		expect(validatePesel('2').isValid).toBe(false);
		expect(validatePesel('123').isValid).toBe(false);
		expect(validatePesel('abcdefghijk').isValid).toBe(false);
	});
});
