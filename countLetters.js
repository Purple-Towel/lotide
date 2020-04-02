/*
  const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};
*/

const countLetters = function(string) {
  let output = {};
  for (let letter of string) {
    if (letter !== '' && letter !== ' ') {
      if (output[letter] > 0) {
        output[letter]++;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};


console.log({l: 1, i: 2, g: 1, h: 4, t: 2,o: 2,u: 2, s: 2, e: 3, n: 1,}, 'test case');
console.log('-------');
console.log(countLetters('lighthouse in the house'), 'output case');