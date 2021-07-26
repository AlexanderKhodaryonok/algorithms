import { getTrailingZerosCount } from '../../algorithms/numberOfTrailingZeros';

describe('Test getTrailingZerosCount', () => {
    test('()', () => {
        expect(getTrailingZerosCount(0)).toEqual(0);
        expect(getTrailingZerosCount(5)).toEqual(1);
        expect(getTrailingZerosCount(6)).toEqual(1);
        expect(getTrailingZerosCount(10)).toEqual(2);
        expect(getTrailingZerosCount(30)).toEqual(7);
        expect(getTrailingZerosCount(100)).toEqual(24);
        expect(getTrailingZerosCount(1000)).toEqual(249);
    });
});