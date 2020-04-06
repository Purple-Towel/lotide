/*const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};
*/

const tail = function(array) {
  let tailOut = array.length >= 1 ? array.slice(1) : [];
  return tailOut;
};

module.exports = tail;