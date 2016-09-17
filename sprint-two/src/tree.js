var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // children property, an array containing a number of subtrees
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  newTree.parent = null;

  return newTree;
};

var treeMethods = {};
//takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  if (value === 10) {
    //debugger;
  }
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;
};
//takes any input and returns a boolean reflecting whether it 
//can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    var found = false;

    this.children.forEach(function(child) {
      if (child.value === target) {
        found = true;
      }
      found = found || child.contains(target);
    });

    return found;
  }

  return false;
};

treeMethods.removeFromParent = function() {
  var parentTree = this.parent;
  var childIndex = parentTree.children.map(function(child) {
    return child.value;
  }).indexOf(this.value);
  parentTree.children.splice(childIndex, 1);
  this.parent = null;
};



//A .parent property, which refers to the parent node or null when there is no node
//A .removeFromParent() method, which disassociates the tree with its parent (in both directions)



/*
 * Complexity: What is the time complexity of the above functions?
 */
