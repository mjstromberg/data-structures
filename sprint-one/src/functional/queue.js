var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    counter = counter > 0 ? counter-1 : 0;
    delete storage[0];
    for (var key in storage) {
      storage[+key-1] = storage[key];
    }
    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
