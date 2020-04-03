const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const findKey = function(object, callback) {
  const keysInObject = Object.keys(object);
  for (let key of keysInObject) {
    if (callback(object[key])) {
      return key;
    }
  }
};

let constellations = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(constellations, x => x.stars === 2), "noma");
assertEqual(findKey(constellations, x => x.stars === 3), "Akaleri");
assertEqual(findKey(constellations, x => x.stars === 4), undefined);