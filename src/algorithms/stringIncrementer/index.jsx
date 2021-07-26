function devideString(str) {
    const parts = {
        numbers: [],
        letters: [],
    };
    for(let char of str) {
        if(isNaN(char)) {
            parts.letters.push(char);
        } else if(!isNaN(char)) {
            parts.numbers.push(char);
        }
    }
    return parts;
}

function devideNumbers(str) {
    const zeros = [];
    const numbers = [];
    for(let char of str) {
        if(char === '0') {
            zeros.push(char);
        } else if(char > 0) {
            numbers.push(char);
        }
    }
    return { zerosStr: zeros.join(''), numbersStr: numbers.join('') };
}

function addExtraZeros(str, different) {
    const numbers = str.split('');
    for(let i = different; i > 0; i--) {
        numbers.unshift('0');
    }
    return numbers.join('');
}

function incrementNumber(str) {
    const { zerosStr, numbersStr } = devideNumbers(str);
    const incrementedNumber = +numbersStr + 1;
    const strLength = str.length;
    const incrementedNUmberLength = incrementedNumber.toString().length;
    if(strLength <= incrementedNUmberLength) {
        return incrementedNumber.toString();
    }
    if(!strLength) {
        return '1';
    }
    if( incrementedNUmberLength === numbersStr.length) {
        const fullNumberStr = zerosStr + incrementedNumber;
        return fullNumberStr.toString();
    }
    if(strLength > incrementedNUmberLength) {
        const resultNumber = addExtraZeros(incrementedNumber.toString(), strLength - incrementedNUmberLength);
        return resultNumber.toString();
    }
}

export function incrementString(str) {
    const { numbers, letters } = devideString(str);
    const numberStr = incrementNumber(numbers);
    return letters.join('') + numberStr;
}
