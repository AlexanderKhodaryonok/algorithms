import { camelCase } from '../../algorithms/camelCaseMethod';

describe('Test camelCase()', () => {
    test('()', () => {
        expect(camelCase("test case")).toEqual("TestCase");
        expect(camelCase("camel case method")).toEqual("CamelCaseMethod");
        expect(camelCase("say hello ")).toEqual("SayHello");
        expect(camelCase(" camel case word")).toEqual('CamelCaseWord');
        expect(camelCase('')).toEqual('');
    });
});

// describe('Test camelCase()', () => {
//     test('()', () => {
//         expect("test case".camelCase()).toEqual("TestCase");
//         expect("camel case method".camelCase()).toEqual("CamelCaseMethod");
//         expect("say hello ".camelCase()).toEqual("SayHello");
//         expect(" camel case word".camelCase()).toEqual('CamelCaseWord');
//         expect('').toEqual('');
//     });
// });