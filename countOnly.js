const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Jason"], 2);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);