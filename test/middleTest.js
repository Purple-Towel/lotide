let middle = require('../middle');
let assert = require('chai').assert;

describe("#middle", () => {
  it('returns 2 for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ['Lighthouse']); 
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs', 'Students']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs", "Students"]), ['Lighthouse', 'Labs']); 
  });
});

/*
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2]), [1]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1]), [1]);
*/
