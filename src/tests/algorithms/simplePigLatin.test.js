import { pigIt } from "../../algorithms/simplePigLatin";

describe("Test pigIt", () => {
  test("()", () => {
    expect(pigIt("Pig latin is cool")).toEqual("igPay atinlay siay oolcay");
    expect(pigIt("This is my string")).toEqual("hisTay siay ymay tringsay");
    expect(pigIt('Hello world !')).toEqual("elloHay orldway !");
    expect(pigIt('Pig latin is cool')).toEqual("igPay atinlay siay oolcay");
    expect(pigIt('O tempora o mores !')).toEqual("Oay emporatay oay oresmay !");
    expect(pigIt('O tempora o mores!')).toEqual("Oay emporatay oay oresmay!");
  });
});
