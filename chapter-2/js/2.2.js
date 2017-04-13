/*
Implement an algorithm to find the nth to last element of a singly linked list.
*/

// Complexity O(N)
function nthToLast(head, nth) {
  if (!head || nth < 1) { return; }

  p1 = head;

  for (var i=0; i < nth - 1; i++) {
    if (!p1.nodeNext) { return; }
    p1 = p1.nodeNext;
  }

  p2 = head;

  while(p1.nodeNext) {
    p1 = p1.nodeNext;
    p2 = p2.nodeNext;
  }

  return p2;
}

// Testing
var assert = require('assert');

function LinkedList() {
  var size = 0;
  var head = null;
  var tail = null;
};

LinkedList.prototype = {
  _createNode: function(data) {
    return {
      nodeNext: null,
      data: data
    };
  },

  addNode: function(data) {
    var node = this._createNode(data);
    this.size = this.size + 1;

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.nodeNext = node;
    }

    this.tail = node;
  }
};

var linked = new LinkedList();
var a = linked.addNode('a');
var b = linked.addNode('b');
var c = linked.addNode('c');
var d = linked.addNode('d');
var e = linked.addNode('e');
var f = linked.addNode('f');

assert.equal(e, nthToLast(a, 2));
assert.equal(d, nthToLast(a, 3));
