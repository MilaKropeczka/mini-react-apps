const randomArray = <T>(array: T[]): T[] => {
	const randomChar = [...array];
	for (let i = randomChar.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[randomChar[i], randomChar[j]] = [randomChar[j], randomChar[i]];
	}
	return randomChar;
};

const randomText = (word: string): string => {
	const firstChar = word[0];
	const lastChar = word[word.length - 1];
	const middleChars = [...word.slice(1, -1)];

	const randomdMiddle = randomArray(middleChars);
	return `${firstChar}${randomdMiddle.join('')}${lastChar}`;
};

export const mixText = (text: string): string => {
	return text
		.split('\n')
		.map((x) => x.replace(/([\p{L}\d]+)/gu, (word) => randomText(word)))
		.join('\n');
};
