/*
Implement an algorithm to find the nth to last element of a singly linked list.
*/

// Complexity O(N)
var getNodeByIndex = function(head, index) {
  var current = head;
  var i = 0;

  while (i < index) {
    current = current.next;
    i = i + 1;
  }

  return current; 
};


// Complexity O(N)
var findNthToLastElement = function(headNode, nth) {
  if (typeof(nth) != 'number' || nth < 0) { return false; }

  var nthNode = getNodeByItem(headNode, nth);

  if (nthNode == null) {
    return [];
  }

  var output = [];
  var current = nthNode.next;
  output.push(current);

  while (current != null) {
    output.push(current);
    current = current.next;
  }

  return output;
};
