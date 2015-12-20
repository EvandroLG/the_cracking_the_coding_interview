/*
Given a directed graph, design an algorithm to find out whether there is a route be- tween two nodes.
*/

var _diff = function(firstArray, secondArray) {
  var output = [];

  for (var i=0, size=firstArray.length; i < size; i++) {
    var value = firstArray[i];

    if (secondArray.indexOf(value) == -1) {
      output.push(value);
    }
  }

  return output;
};

var isThereRoute = function(graph, start, end) {
  var stack = [start];
  var visited = [];
  var vertex = null;

  while (stack.length > 0) {
    vertex = stack.pop();

    if (visited.indexOf(vertex) == -1) {
      visited.push(vertex);
      if (vertex == end) {
        return true;
      }
      stack = _diff(graph[vertex], visited);
    }
  }

  return false;
};

var assert = require('assert');

var graph = {
  'a': ['b', 'c'],
  'b': ['d'],
  'c': ['d']
};

assert.equal(isThereRoute(graph, 'a', 'd'), true);
