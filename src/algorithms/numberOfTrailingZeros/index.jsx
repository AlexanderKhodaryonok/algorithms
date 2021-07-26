export function getTrailingZerosCount(num) {
	let counter = 0;
  for (let i = 5; Math.floor(num / i) >= 1; i *= 5) {
    counter += Math.floor(num / i);
	}
	return counter;
}
