/*
Given a binary search tree, design an algorithm which creates a 
linked list of all the nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists).
*/

var _createNode = function(data) {
  return {
    data: data,
    next: null,
    prev: null
  };
};

// Complexity O(N)
var traverse = function(root, callback) {
  var _inOrder = function(node) {
    if (node == null) { return; }
    _inOrder(node.left);
    callback(node);
    _inOrder(node.right);
  };

  _inOrder(root);
};

var convertFromTreeToLinkedList = function(root) {
  var prev = null;
  var result = [];

  traverse(root, function(threeNode) {
    var node = _createNode(threeNode.data);
    node.prev = prev;

    if (prev != null) { prev.next = node; }

    prev = {
      data: node.data,
      next: node.next, 
      prev: node.prev
    };

    result.push(node);
  }.bind(this));

  return result;
};
