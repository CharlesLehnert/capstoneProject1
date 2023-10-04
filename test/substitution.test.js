const { expect } = require("chai");
const substitutionModule = require("../src/substitution.js");

describe("substitution", () => {
     it("should ignore capital letters", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
  });
  it("should be able to take a message that has spaces in it", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
  });
  it("should be able to take special characters", () => {
    const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
  });
  it("should have all unique characters in the alphabet parameter", () => {
    const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.eql(expected);
})
   it("should have the alphabet parameter be a string of exactly 26 characters", () => {
    const actual = substitutionModule.substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.eql(expected);
})
})