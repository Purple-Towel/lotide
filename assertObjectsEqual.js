const eqObjects = function(object1, object2) {
  let keyLengthOfFirst = Object.keys(object1).length;
  let keyLengthSecond = Object.keys(object2).length;
  const isLengthEqual = (keyLengthOfFirst === keyLengthSecond);
  if (isLengthEqual) {
    for (let key1 in object1) {
      for (let key2 in object2) {
        if (key1 === key2) {
          if (object1[key1] !== object2[key2]) {
            return false;
          } return true;
        }
      }
    }
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let areObjectsEqual = eqObjects(actual, expected);
  let passed = `✅ Function Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let failed = `❌ Function Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  areObjectsEqual === true ? console.log(passed) : console.log(failed);
};

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({a: 2, b: 1}, {b: 1, a: 2});
assertObjectsEqual({a: 2, c: 1}, {b: 1, a: 2, c: 4});

module.exports = assertObjectsEqual;