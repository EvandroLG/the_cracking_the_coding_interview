/*
Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. 
NOTE: One or two additional variables are fine. An extra copy of the array is not.
FOLLOW UP
Write the test cases for this method.
*/

// Complexity O(N2)
var removeDuplicateCharacters = function(str) {
  if (typeof(str) != 'string') { return null; }
  if (str.length == 1) { return str; }

  let output = '';
  for (let i=0, size=str.length; i < size; i++) {
    if (!output.includes(str[i])) {
      output = output + str[i];
    }
  }

  return output;
};

var assert = require('assert');
assert.equal(null, removeDuplicateCharacters(1));
assert.equal('a', removeDuplicateCharacters('a'));
assert.equal('abc', removeDuplicateCharacters('aabc'));
assert.equal('abc', removeDuplicateCharacters('aaabcacb'));
