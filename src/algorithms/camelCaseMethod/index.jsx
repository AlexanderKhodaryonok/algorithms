export function camelCase(str) {
	const words = str.split(' ');
	const formattedWords = words.map( word => {
		if(!word) return '';
		let chars = word.split('');
		chars[0] = chars[0].toUpperCase();
		const formattedWord = chars.join('');
		return formattedWord;
	})
	const formattedString = formattedWords.join('');
	return formattedString;
};
