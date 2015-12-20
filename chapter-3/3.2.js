/*
How would you design a stack which, in addition to push and pop, also has a function min
which returns the minimum element? Push, pop and min should all operate in O(1) time.
*/

var Stack = function() {
  this._data = [];
  this._minimum = [];
  this._size = 0;
};

Stack.prototype = {

  // Complexity O(1)
  getMinimum: function() {
    return this._minimum[this._minimum.length - 1];
  },

  // Complexity O(1)
  push: function(value) {
    this._data.push(value); 

    if (this._minimum.length == 0 ||
        this._minimum[this._minimum.length - 1] > value) {
      this._minimum.push(value);
    }

    return this._data.length;
  },

  // Complexity O(1)
  pop: function() {
    var value = this._data.pop();

    if (this._minimum[this._minimum.length - 1] == value) {
      this._minimum.pop();
    }

    return value;
  }
};

var assert = require('assert');
var stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(-1);
stack.pop();
assert.equal(stack.getMinimum(), 1);

