var BinarySearchTree = function(value) {
  var treeInstance = Object.create(BinarySearchTree.prototype);
  treeInstance.value = value;
  treeInstance.left = null;
  treeInstance.right = null;
  return treeInstance;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (this.right !== null && value === this.right.value) {
    this.right.contains(value);
    return true;
  } else if (this.left !== null && value === this.left.value) {
    this.left.contains(value);
    return true;
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  } else if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var treeQueue = TreeQueue();
  var inFocusTree = this;

  while (inFocusTree !== undefined && inFocusTree !== null) {
    cb(inFocusTree.value);

    var children = [inFocusTree.left, inFocusTree.right];
    
    children.forEach(function(child) {
      if (child !== undefined && child !== null) {
        treeQueue.enqueue(child);
      }
    });

    inFocusTree = treeQueue.dequeue();
  }
};

var TreeQueue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(tree) {
    storage[counter] = tree;
    counter++;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    counter = counter > 0 ? counter - 1 : 0;
    delete storage[0];
    for (var key in storage) {
      storage[+key - 1] = storage[key];
    }
    delete storage[counter];
    return result;
  };

  someInstance.retrieve = function() {

  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
