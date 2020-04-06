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

module.exports = eqArrays;