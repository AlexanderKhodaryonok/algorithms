import { getQueueTime } from '../../algorithms/supermarketQueue';

describe('Test supermarketQueue()', () => {
    test('()', () => {
        expect(getQueueTime([], 1)).toEqual(0);
        expect(getQueueTime([1, 2, 3, 4], 1)).toEqual(10);
        expect(getQueueTime([2, 2, 3, 3, 4, 4], 2)).toEqual(9);
        expect(getQueueTime([1, 2, 3, 4, 5], 100)).toEqual(5);
        expect(getQueueTime([10, 2, 3, 3], 2)).toEqual(10);
        expect(getQueueTime([5, 3, 4], 1)).toEqual(12);
        expect(getQueueTime([10, 2, 3, 3], 2)).toEqual(10);
        expect(getQueueTime([2, 3, 10], 2)).toEqual(12);
    })
});