import { checkBracketsRec, checkBracketsCounter, checkBracketsStack } from '../../../src/algorithms/brackets';

describe('Test brackets task', () => {
    test('()', () => {
        expect(checkBracketsStack('()')).toBeTruthy();
        expect(checkBracketsRec('()')).toBeTruthy();
        expect(checkBracketsCounter('()')).toBeTruthy();
    });
    test('(())()(())()', () => {
        expect(checkBracketsStack('(())()(())()')).toBeTruthy();
        expect(checkBracketsRec('(())()(())()')).toBeTruthy();
        expect(checkBracketsCounter('(())()(())()')).toBeTruthy();
    });
    test('([{}])', () => {
        expect(checkBracketsStack('([{}])')).toBeTruthy();
        expect(checkBracketsRec('([{}])')).toBeTruthy();
    });

    test('(', () => {
        expect(checkBracketsStack('(')).toBeFalsy();
        expect(checkBracketsRec('(')).toBeFalsy();
        expect(checkBracketsCounter('(')).toBeFalsy();
    });
    test('((())()(())()', () => {
        expect(checkBracketsStack('((())()(())()')).toBeFalsy();
        expect(checkBracketsRec('((())()(())()')).toBeFalsy();
        expect(checkBracketsCounter('((())()(())()')).toBeFalsy();
    });
    test('[(]){}', () => {
        expect(checkBracketsStack('[(])')).toBeFalsy();
        expect(checkBracketsRec('[(])')).toBeFalsy();
    });
    test('{', () => {
        expect(checkBracketsStack('{')).toBeFalsy();
        expect(checkBracketsRec('{')).toBeFalsy();
    });
});