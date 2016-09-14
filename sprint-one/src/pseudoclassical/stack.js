var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};

Stack.prototype.push = function() {
  return this.counter++;
};

Stack.prototype.size = function() {
  return 0;
};


