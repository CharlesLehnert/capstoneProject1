// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  function caesar(input, shift, encode = true) {
   
    if (!shift || shift < -25 || shift > 25 || shift ===0 ) {
      return false;
    }

 
    input = input.toLowerCase();

  
    let result = '';

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (/[a-z]/.test(char)) {
   
        const index = alpha.indexOf(char);

       
        let shiftedIndex = index + (encode ? shift : -shift);

        if (shiftedIndex < 0) {
          shiftedIndex += 26;
        } else if (shiftedIndex >= 26) {
          shiftedIndex -= 26;
        }

     
        const shiftedChar = alpha[shiftedIndex];
        result += shiftedChar;
      } else {
     
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
