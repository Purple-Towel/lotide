const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);