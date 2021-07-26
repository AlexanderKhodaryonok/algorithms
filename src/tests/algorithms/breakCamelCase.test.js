import { removeCamelCase } from '../../algorithms/breakCamelCase';

describe('Test removeCamelCase()', () => {
    test('()', () => {
        expect(removeCamelCase('camelCasing')).toEqual('camel Casing');
        expect(removeCamelCase('camelCasingTest')).toEqual('camel Casing Test');
    })
});