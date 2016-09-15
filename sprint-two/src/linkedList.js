var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //takes in value and adds value to end of list

    list[value] = Node(value);
    if (list.tail === null) {
      list.tail = list[value];
      list.head = list[value];
    } else {
      list[list.tail.value].next = value;
      if (_.isEqual(list.head, list.tail)) {
        list.head.next = list[value].value;
      }
      list.tail = list[value];
    }
  };

  list.removeHead = function() {
    //removes the first node from the list and returns its value
    var result = list.head.value;
    if (_.isEqual(list.head, list.tail)) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list[list.head.next];
      delete list[result];
    }
    return result;
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the passed-in value is in the linked list
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
