

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var collision = this._storage.get(index);
  if (collision !== undefined && collision[0] !== k) {
    var newIndex = null;
    for (var i = 0; i < this._limit; i++) {
      if (this._storage.get(i) === undefined) {
        newIndex = newIndex !== null ? newIndex : i;
      }  
    }
    this._storage.set(newIndex, [k, v]);
  } else {
    this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var result;
  for (var i = 0; i < this._limit; i++) {   
    var val = this._storage.get(i);
    if (val !== undefined && val[0] === k) {
      result = this._storage.get(i)[1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  for (var i = 0; i < this._limit; i++) {
    var val = this._storage.get(i);
    if (val !== undefined && val[0] === k) {
      this._storage.set(i, undefined);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//if collision
  //find next untaken index
    //assign this to collided index 
    //use collided index to store this new key and value

