/*
const eqArrays = function(inputArray, testArray) {
  if (inputArray.length === testArray.length) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] !== testArray[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(inputArray, testArray) {
  let eqArraysOutput = eqArrays(inputArray, testArray);
  let passed = "✅ Function Passed: Arrays are equal.";
  let failed = "❌ Function Failed: Arrays are inequal.";
  eqArraysOutput === true ? console.log(passed) : console.log(failed);
};
*/
const letterPositions = function(string) {
  let output = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '' && string[i] !== ' ') {
      let arrayConstruct = [i];
      if (!(`${string[i]}` in output)) {
        output[`${string[i]}`] = arrayConstruct;
      } else {
        output[`${string[i]}`].push(i);
      }
    }
  }
  return output;
};


console.log(letterPositions('hello world'));
console.log(letterPositions("lighthouse in the house"));