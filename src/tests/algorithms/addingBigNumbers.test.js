import { calculateNumsBI, calculateNumsNonBI } from '../../algorithms/addingBigNumbers';

describe("Test addingBigNumbers with bigInt task", () => {
  test("()", () => {
    expect(calculateNumsBI("1", "1")).toEqual("2");
    expect(calculateNumsBI("123", "456")).toEqual("579");
    expect(
      calculateNumsBI(
        "63829983432984289347293874",
        "90938498237058927340892374089"
      )
    ).toEqual("91002328220491911630239667963");
  });
});

describe("Test addingBigNumbers without bigInt task", () => {
  test("()", () => {
    expect(calculateNumsNonBI("1", "1")).toEqual("2");
    expect(calculateNumsNonBI("123", "456")).toEqual("579");
    expect(
      calculateNumsNonBI(
        "63829983432984289347293874",
        "90938498237058927340892374089"
      )
    ).toEqual("91002328220491911630239667963");
  });
});
