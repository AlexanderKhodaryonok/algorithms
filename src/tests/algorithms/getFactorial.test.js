import { getFactorial } from '../../algorithms/getFactorial';

describe('Test getFactorial', () => {
    test('()', () => {
        expect(getFactorial(0)).toEqual(1n);
        expect(getFactorial(3)).toEqual(6n);
        expect(getFactorial(4)).toEqual(24n);
        expect(getFactorial(10)).toEqual(3628800n);
    });
});
