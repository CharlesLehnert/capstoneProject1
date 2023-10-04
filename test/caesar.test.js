const { expect } = require("chai");
const caesarModule = require("../src/caesar.js");



describe("caesar", () => {
  it("should encode a string and shift it properly", () => {
    const expected = "khoor wklqnixo";
    const actual = caesarModule.caesar("hello thinkful", 3);
    expect(actual).to.equal(expected);
  });
  it("should return false if there's no shift value", () => {
    const expected = false;
    const actual = caesarModule.caesar("hello thinkful");
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift value is greater than 25", () => {
    const expected = false;
    const actual = caesarModule.caesar("hello thinkful", 99);
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesarModule.caesar("hello thinkful", -26);
    expect(actual).to.eql(expected);
  });
  it("should maintain spacing and special characters throughout", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesarModule.caesar("This is a secret message!", 8);
    expect(actual).to.eql(expected);
  });
  it("should wrap around the alphabet if a letter goes past", () => {
    const expected = "bbb";
    const actual = caesarModule.caesar("zzz", 2);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "ccc";
    const actual = caesarModule.caesar("ZZZ", 3);
    expect(actual).to.eql(expected);
  });
  it("should be able to  decode properly", () => {
    const expected = "this is a secret message!";
    const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
  });
})

