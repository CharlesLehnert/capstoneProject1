const { expect } = require("chai");
const polybiusModule = require("../src/polybius.js");

describe("polybius", () => {
   it("should ignore capital letters", () => {
    const input = "Woooo";
    const expected = "2543434343";
    const result = polybiusModule.polybius(input, true );
    expect(result).to.equal(expected);
  });
    it("should leave spaces as is", () => {
     const actual = polybiusModule.polybius("3251 3251", false);
        const expected = "he he"
        expect(actual).to.eql(expected);
    });
  it("should convert i and j into 42", ()=> {
    const expected = "4242";
    const actual = polybiusModule.polybius("ij")
    expect(actual).to.eql(expected)
  })
  it("it should show both i and j when decoding 42", ()=>{
    const expected = "th(i/j)nk";
    const actual = polybiusModule.polybius("4432423352", false)
    expect(actual).to.eql(expected)
  })
  it("When encoding, your output should still be a string.", ()=>{
    const expected = "4432423352"
    const actual = polybiusModule.polybius("think")
    expect(actual).to.eql(expected)
  })
   it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", ()=>{
      const expected = false;
     const actual = polybiusModule.polybius("443", false)
   expect(actual).to.eql(expected)
     })
  
  
})