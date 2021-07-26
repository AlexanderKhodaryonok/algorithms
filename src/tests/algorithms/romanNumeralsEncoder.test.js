import { romanNumeralsEncoder } from '../../algorithms/romanNumeralsEncoder';

describe('Test romanNumeralsEncoder', () => {
    test('()', () => {
        expect(romanNumeralsEncoder(1)).toEqual('I');
        expect(romanNumeralsEncoder(2)).toEqual('II');
        expect(romanNumeralsEncoder(3)).toEqual('III');
        expect(romanNumeralsEncoder(4)).toEqual('IV');
        expect(romanNumeralsEncoder(5)).toEqual('V');
        expect(romanNumeralsEncoder(9)).toEqual('IX');
        expect(romanNumeralsEncoder(10)).toEqual('X');
        expect(romanNumeralsEncoder(11)).toEqual('XI');
        expect(romanNumeralsEncoder(19)).toEqual('XIX');
        expect(romanNumeralsEncoder(22)).toEqual('XXII');
        expect(romanNumeralsEncoder(15)).toEqual('XV');

        expect(romanNumeralsEncoder(1000)).toEqual('M');
        expect(romanNumeralsEncoder(1001)).toEqual('MI');
        expect(romanNumeralsEncoder(1990)).toEqual('MCMXC');
        expect(romanNumeralsEncoder(2007)).toEqual('MMVII');
        expect(romanNumeralsEncoder(2008)).toEqual('MMVIII');
        expect(romanNumeralsEncoder(2265)).toEqual('MMCCLXV');
    });
});