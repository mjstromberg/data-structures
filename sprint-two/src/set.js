var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

//takes any string and adds it to the set
setPrototype.add = function(item) {
  this._storage.push(item);
};

//takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  var found = false;
  this._storage.forEach(function(string) {
    if (string === item) {
      found = true;
    }
  });
  return found;
};

//takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
