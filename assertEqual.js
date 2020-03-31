const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("LHL", "LHL");
assertEqual(1, '1');
assertEqual(1, "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(true, 1);
assertEqual(false, false);