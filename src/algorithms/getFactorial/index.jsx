export function getFactorial(num) {
	let factorial = 1n;
	for(let i = 1n; i < num; i++) {
		factorial = factorial * (i + 1n);
	}
	return factorial;
}
