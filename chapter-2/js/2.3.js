// Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node.

// Complexity: O(1)
function deleteNode(node) {
  if (!node || !node.nodeNext) { return false; }

  var nodeNext = node.nodeNext;
  node.data = nodeNext.data;
  node.nodeNext = nodeNext.nodeNext;

  return true;
}

// Testing
var assert = require('assert');

function LinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
};

LinkedList.prototype = {
  _createNode: function(data) {
    return {
      data: data,
      nodeNext: null
    };
  },

  addNode: function(data) {
    var node = this._createNode(data);
    
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.nodeNext = node;
    }

    this.tail = node;

    return this.tail;
  }
};

var linked = new LinkedList();
var a = linked.addNode('a');
var b = linked.addNode('b');
var c = linked.addNode('c');

deleteNode(b);
assert.equal('c', a.nodeNext.data);
