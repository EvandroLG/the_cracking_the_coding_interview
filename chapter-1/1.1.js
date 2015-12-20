/*
Implement an algorithm to determine if a string has all unique characters.
What if you can not use additional data structures?
*/

// Complexity = O(N)
var uniqueCharacters = function(str) {
  var firstCharacter = str[0];

  for (var i=1, size=str.length; i < size; i++) {
    if (firstCharacter != str[i]) { return false; } 
  }

  return true;
};


var assert = require('assert');
assert.equal(uniqueCharacters('aaaaa'), true);
assert.equal(uniqueCharacters('beta'), false);
