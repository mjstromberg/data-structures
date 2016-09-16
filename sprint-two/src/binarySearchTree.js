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

/*
 * Complexity: What is the time complexity of the above functions?
 */
