var bubblesort = require("../bubblesort");
var assert = require("assert");

var testData = [5,2,4,6,1,3]
var expected = [1,2,3,4,5,6];
var actual = bubblesort(testData);
assert.deepEqual(expected, actual, 'arrays not equal');
