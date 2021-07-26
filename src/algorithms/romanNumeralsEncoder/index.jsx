const digits = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
};

export function romanNumeralsEncoder(number) {
  const numbers = number.toString().split("");
  const reversedNumbers = numbers.reverse();
  const romanNumbers = [];
  reversedNumbers.forEach((char, index) => {
		if(char === '0') return;
		if(index === 3) {
			const str = new Array(+char).fill(digits['1000']).join('');
			return romanNumbers.push(str);
		}
		const fullNumber = +char * +Math.pow(10, index).toString();
		romanNumbers.push(digits[fullNumber]);
	});
	return romanNumbers.reverse().join('');
}
