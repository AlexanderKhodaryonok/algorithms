import { getLikedPersons } from '../../algorithms/whoLikesIt';

describe('Test getLikedPersons', () => {
    test('()', () => {
        expect(getLikedPersons([])).toEqual('no one likes this');
        expect(getLikedPersons(['Peter'])).toEqual('Peter likes this');
        expect(getLikedPersons(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
        expect(getLikedPersons(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this');
        expect(getLikedPersons(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this');
    });
});