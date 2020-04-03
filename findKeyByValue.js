const assertEqual = function(actual, expected) {
  let passed = `✅ Function Passed: ${actual} === ${expected}`;
  let failed = `❌ Function Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const findKeyByValue = function(object, value) {
  const keysInObject = Object.keys(object);
  for (let key of keysInObject) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const topThreeVideoGames = {
  first: "Dark Souls",
  second: "Minecraft",
  third: "XCOM 2"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(topThreeVideoGames, "Dark Souls"), "first");
assertEqual(findKeyByValue(topThreeVideoGames, "XCOM 2"), "fourth");