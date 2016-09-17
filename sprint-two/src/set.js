//hash table function
var SetHashTable = function() {
  this._limit = 8;
  this._storage = SetLimitedArray(this._limit);
};

SetHashTable.prototype.insert = function(k, v) {
  var index = SetGetIndexBelowMaxForKey(k, this._limit);
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

SetHashTable.prototype.retrieve = function(k) {
  var result;
  var index = SetGetIndexBelowMaxForKey(k, this._limit);
  var storageCopy = this._storage.get(index) || [];
  for (var i = 0; i < storageCopy.length; i++) {
    if (storageCopy[i][0] === k) {
      result = storageCopy[i][1];
    }
  }
  return result;
};

SetHashTable.prototype.remove = function(k) {

  var index = SetGetIndexBelowMaxForKey(k, this._limit);
  var storageCopy = this._storage.get(index);
  for (var i = 0; i < storageCopy.length; i++) {
    if (storageCopy[i][0] === k) {
      storageCopy.splice(i, 1);
    }
  }
}; 




//hash helper functions
var SetLimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var SetGetIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//set 

var Set = function() {
  var set = Object.create(setPrototype);
  set.limit = 100;
  set._storage = new SetHashTable();
  return set;
};

var setPrototype = {};

//takes any string and adds it to the set
setPrototype.add = function(item) {
  this._storage.insert(item, item);
};

//takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  return this._storage.retrieve(item) === undefined ? false : true;

/*
  var found = false;
  this._storage.forEach(function(string) {
    if (string === item) {
      found = true;
    }
  });
  return found;*/
};

//takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  this._storage.remove(item);


  /*var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);*/
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
