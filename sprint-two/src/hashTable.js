var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageCopy = this._storage.get(index);
  
  if (storageCopy === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var kMatch = false;
    var matchIndex;
    for (var i = 0; i < storageCopy.length; i++) {
      if (storageCopy[i][0] === k) {
        kMatch = true;
        matchIndex = i;
      }
    }
    if (kMatch) {
      storageCopy[matchIndex][1] = v;
    } else { 
      storageCopy.push([k, v]);
    }
    this._storage.set(index, storageCopy);
  }
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageCopy = this._storage.get(index);
  for (var i = 0; i < storageCopy.length; i++) {
    if (storageCopy[i][0] === k) {
      result = storageCopy[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageCopy = this._storage.get(index);
  for (var i = 0; i < storageCopy.length; i++) {
    if (storageCopy[i][0] === k) {
      storageCopy.splice(i, 1);
    }
  }
}; 



/*
 * Complexity: What is the time complexity of the above functions?
 */
