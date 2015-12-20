/*
Write a method to replace all spaces in a string with ‘%20’.
*/

// Complexity O(N)
var replaceSpaces = function(str) {
  if (typeof(str) != 'string') { return null; }

  // store the str size
  var size = str.length;
  var spaceCount = str.split(' ').length - 1;
  var newSize = size + (spaceCount * 2);
  var tmp = null;

  for (var i=0; i < newSize; i++) {
    // check if the value is a space 
    if (str[i] == ' ') {
      // if so, then store the characters from the current position to the end
      tmp = str.slice(i+1);
      // after, add % in current position, and 20 in the next positions
      str = str.substr(0, i) + '%20' + tmp;
      // continue from new next position
      i = i + 3;
    }
  }

  return str;
};

var assert = require('assert');
assert.equal(replaceSpaces('Lua is a great language'), 'Lua%20is%20a%20great%20language');
