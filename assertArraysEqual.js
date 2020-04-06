/*const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};
*/

let eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = function(inputArray, testArray) {
  let eqArraysOutput = eqArrays(inputArray, testArray);
  let passed = "✅ Function Passed: Arrays are equal.";
  let failed = "❌ Function Failed: Arrays are inequal.";
  eqArraysOutput === true ? console.log(passed) : console.log(failed);
};

module.exports = assertArraysEqual;