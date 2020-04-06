let tail = require('../tail');
let assert = require('chai').assert;

describe("#tail", () => {
  it('returns 2 for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', "Labs"]); 
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs', 'Students']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs", "Students"]), ['Lighthouse', 'Labs', 'Students']); 
  });
});

/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
assertEqual(tail(['one']).length, [].length); // if 1 item in array, output empty array
assertEqual(tail([]).length, [].length); // if empty array, return empty empty array
*/