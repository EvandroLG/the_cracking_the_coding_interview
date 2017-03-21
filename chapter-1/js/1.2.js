/*
Write code to reverse a C-Style String. 
(C-String means that “abcd” is represented as a five characters, including the null character.)
*/

function reverse(str) {
  if (typeof(str) != 'string') { return; }

  let output = '';
  for (let i=str.length-2; i >= 0; i--) {
    output = output + str[i];
  }

  return output+'\0';
};

var assert = require('assert');
assert.equal('fedcba\0', reverse('abcdef\0'));
