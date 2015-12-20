/*
Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
*/

var isRotation = function(s1, s2) {
  if (typeof(s1) != 'string' || typeof(s2) != 'string') {
    return false;
  }
  
  if (s1.length != s2.length) {
    return false;
  }

  var s1s1 = s1 + s1;
  return s1s1.indexOf(s2) > -1;
};

var assert = require('assert');
assert.equal(isRotation('waterbottle', 'erbottlewat'), true);
assert.equal(isRotation('waterbottle', 'erbottlewal'), false);
