import { getArabDigit } from '../../algorithms/converRomanToArab';

describe('Test convertToArabDigit', () => {
    test('()', () => {
        expect(getArabDigit('X')).toEqual(10);
        expect(getArabDigit('XIV')).toEqual(14);
        expect(getArabDigit('XXI')).toEqual(21);
        expect(getArabDigit('I')).toEqual(1);
        expect(getArabDigit('IV')).toEqual(4);
        expect(getArabDigit('MMVIII')).toEqual(2008);
        expect(getArabDigit('MDCLXVI')).toEqual(1666);
    });
});