/*const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};
*/

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

assertArraysEqual([1,2,3], [1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);