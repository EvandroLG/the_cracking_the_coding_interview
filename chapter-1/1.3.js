/*
Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. 
NOTE: One or two additional variables are fine. An extra copy of the array is not.
FOLLOW UP
Write the test cases for this method.
*/

// Complexity O(N)
var removeDuplicateCharacters = function(str) {
  if (typeof(str) != 'string') { return null; }
  if (str.length == 1) { return str; }

  var characters = {};
  var output = [];

  for (var i=0, size=str.length; i < size; i++) {
    if (str[i] in characters == false) {
      output.push(str[i]);
      characters[str[i]] = true;
    }
  }

  return output.join('');
};

var assert = require('assert');
assert.equal(removeDuplicateCharacters('aabc'), 'abc');
