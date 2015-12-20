/*
Implement a function to check if a tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.
*/

var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var minDepth = function(root) {
  if (root == null) {
    return 0;
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

var isBalanced = function(root) {
  return (maxDepth(root) - minDepth(root) <= 1);
};

var assert = require('assert');

var rightNode = {
  data: 20,
  left: null,
  right: null
}

var leftNode = {
  data: 5,
  left: null,
  right: null
}

var rootNode = {
  data: 10,
  left: leftNode,
  right: rightNode
}

assert.equal(isBalanced(rootNode), true);
