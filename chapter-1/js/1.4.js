/*
Write a method to decide if two strings are anagrams or not.
*/

// Complexity O(N)
var counterCharacters = function(str) {
  var counter = {};

  for (var i=0, size=str.length; i < size; i++) {
    if (str[i] in counter) {
      counter[str[i]] = counter[str[i]] + 1;
    } else {
      counter[str[i]] = 1;
    }
  }

  return counter;
};

// Complexity O(N)
var equalHashes = function(first, second) {
  if (first.length != second.length) { return false; }

  for (var key in first) {
    if (first[key] != second[key]) { return false; }
  }

  return true;
};

var areAnagrams = function(firstStr, secondStr) {
  if (typeof(firstStr) != 'string' || typeof(secondStr) != 'string') {
    return false;
  }

  if (firstStr.length != secondStr.length) { return false; }

  var firstCounter = counterCharacters(firstStr);  
  var secondCounter = counterCharacters(secondStr);

  return equalHashes(firstCounter, secondCounter);

};

var assert = require('assert');
assert.equal(areAnagrams('beta', 'beat'), true);
assert.equal(areAnagrams('bety', 'beat'), false);
