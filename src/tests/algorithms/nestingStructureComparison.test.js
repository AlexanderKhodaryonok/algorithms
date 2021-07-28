import { sameStructureAs } from "../../algorithms/nestingStructureComparison";

describe("Test sameStructureAs", () => {
  test("()", () => {
    expect(sameStructureAs([ 1, 1, 1 ], [ 2, 2, 2 ])).toEqual(true);
    expect(sameStructureAs([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ])).toEqual(true);
    expect(sameStructureAs([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ])).toEqual(true);

    expect(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ])).toEqual(false);
    expect(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ])).toEqual(false);
    expect(sameStructureAs([ [ [ ], [ ] ] ], [ [ 1, 1 ] ])).toEqual(false);
    expect(sameStructureAs([], 1)).toEqual(false);
    expect(sameStructureAs([], {})).toEqual(false);
  });
});
