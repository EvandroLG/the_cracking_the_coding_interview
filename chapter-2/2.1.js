/*
Write code to remove duplicates from an unsorted linked list. 
FOLLOW UP How would you solve this problem if a temporary buffer is not allowed?
*/

// Complexity O(N)
var removeDuplicates = function(node) {
  var duplicates = {};
  duplicates[node.data] = true;
  var current = node.next;

  while(current != null) {
    if (current.data in duplicates) {
      var prevNode = current.prev;
      var nextNode = current.next;
      prevNode.next = current.next;
      nextNode.prev = prevNode
    } else {
      duplicates[current.data] = true;
    }

    current = current.next;
  }
};
