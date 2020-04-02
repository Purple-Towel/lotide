const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);