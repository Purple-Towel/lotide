/*const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};
*/
const head = function(array) {
  let headOut = array.length >= 1 ? array[0] : undefined;
  return headOut;
};

module.exports = head;