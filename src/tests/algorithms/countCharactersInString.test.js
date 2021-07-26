import { countChars } from '../../algorithms/countCharactersInString';

describe('Test countChars', () => {
    test('()', () => {
        expect(countChars('aba')).toEqual({ a: 2, b: 1 });
        expect(countChars('')).toEqual({});
    });
});