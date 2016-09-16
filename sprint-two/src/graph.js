

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {value: node, edge: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.map(this.storage, function(item) {
    return item.value;
  }).indexOf(node) > -1 ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage[node].edge.length > 0) {
    for (var i = 0; i < this.storage[node].edge.length; i++) {
      var edgeNode = this.storage[node].edge[i];
      this.storage[edgeNode].edge.splice(this.storage[edgeNode].edge.indexOf(node), 1);
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].edge.length; i++) {
    if (this.storage[fromNode].edge[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var fromN = this.storage[fromNode];
  for (var i = 0; i < fromN.edge.length; i++) {
    if (fromN.edge[i] === toNode) {
      fromN.edge.splice(i, 1);
    }
  }
  var toN = this.storage[toNode];
  for (var i = 0; i < toN.edge.length; i++) {
    if (toN.edge[i] === fromNode) {
      toN.edge.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


