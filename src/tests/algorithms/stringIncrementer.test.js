import { incrementString } from '../../algorithms/stringIncrementer';

describe('Test incrementString()', () => {
    test('()', () => {
        expect(incrementString('foobar00999')).toEqual('foobar01000');
        expect(incrementString('foobar000')).toEqual('foobar001');
        expect(incrementString('foo')).toEqual('foo1');
        expect(incrementString('foobar001')).toEqual('foobar002');
        expect(incrementString('foobar99')).toEqual('foobar100');
        expect(incrementString('foobar099')).toEqual('foobar100');
        expect(incrementString('')).toEqual('1');
    })
});