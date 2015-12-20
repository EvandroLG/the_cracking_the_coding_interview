/*
Given a sorted (increasing order) array, write an algorithm to create a binary tree with minimal height.
*/

var _createNode = function(data) {
  return {
    data: data,
    right: null,
    left: null
  };
};

// Complexity O(N)
var createBinaryTree = function(list, start, end) {
  if (!Array.isArray(list)) {
    throw 'List should be a array!';
  }

  if (start > end) {
    return null;
  }

  var middle = Math.ceil((start + end) / 2);
  var node = _createNode(list[middle]);
  node.left = createBinaryTree(list, start, middle - 1);
  node.right = createBinaryTree(list, middle + 1, end);

  return node;
};

// Testing
var root = createBinaryTree([1, 2, 3, 4, 5], 0, 4);
var traverse = function(callback) {
  var _inOrder = function(node) {
    if (node == null) { return; }

    _inOrder(node.left);
    callback(node);
    _inOrder(node.right);
  };

  _inOrder(root);  
};

var assert = require('assert');
var collection = [];

traverse(function(node) {
  collection.push(node.data);
});

assert.equal(collection.length, 5);
assert.equal(collection[0], 1);
assert.equal(collection[1], 2);
assert.equal(collection[2], 3);
assert.equal(collection[3], 4);
assert.equal(collection[4], 5);
