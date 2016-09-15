

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collision = this._storage.get(index);
  if (collision !== undefined) {
    var array = [];
    array.concat(collision, [k, v]);
    this._storage.set(index, array);
  } else {
    this._storage.set(index, v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisionCheck = this._storage.get(index);
  if (Array.isArray(collisionCheck)) {
    var found = null;
    collisionCheck.forEach(function(array) {
      if (array[0] === k) {
        found = v;
      }
    });
    return found;
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


