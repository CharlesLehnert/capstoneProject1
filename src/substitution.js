// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let secretCode = [];

  function substitution(input, alphabet, encode = true) {
    const checkForRepeats = new Set(alphabet);
    if (
      alphabet === undefined ||
      alphabet.length !== 26 ||
      [...checkForRepeats].length !== 26
    ) {
      return false;
    }

    const charMap = {};
    for (let i = 0; i < alpha.length; i++) {
      charMap[alpha[i]] = alphabet[i];
    }

    const transform = (char) => {
      if (char === " ") {
        return " "; 
      }
      const isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      if (encode) {
        return charMap[char];
      } else {
       
        return Object.keys(charMap).find(key => charMap[key] === char);
      }
    };

    const transformedText = input.split("").map(transform).join("");

    return transformedText;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
