/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  /** push(val): add new value to end of list. */
//add new node with value 'val' to tail; return undefined; 
//this is method in class LinkedList; method is invoked in for loop above; 
  push(val) {
//create new Node object based on class Node above; pass in val for val attribute
    let newNode = new Node(val);
//if list is empty, i.e. if head attribute is null, assign newNode to head attribute; since first and only item, assign newNode to tail attribute as well;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
//if list is not empty, set .next property to newNode and update this.tail so that it moves forward one spot to the newNode, which is now the new end of the list;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
//this.length is property of LinkedList class; update this.length by adding one. either it is the first one, or it is a number > 1
    this.length += 1;
  }
//supposed to return undefined and undefined is the default return value in js;

/** unshift(val): add new value to start of list. */
//update .head property by assigning first value or updating to new value;
  unshift(val) {
//create newNode objecty
    let newNode = new Node(val);
//if the list is empty, assign newNode to the head property;
    if (this.head === null) {
      this.head = newNode;
    } else {
//assign what is currently the head property to the .next property; then assign newNode to head property;
      newNode.next = this.head;
      this.head = newNode;
    }
//if the list was empty, then must set .tail property as well to newNode
    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

//remove and return .tail value
  pop() {
    if (this.head === null) {
//when method called on LinkedList object instance, this.head may be null;
      throw new Error("List is empty.")
    } else {
//if this.head is not null, assign to 'current' variable;
      let current = this.head;
//set variable that will eventually store prior value before .tail value.
      let prior = null;
//keep looping as long as there is a next item i.e. .next is not null;
      while (current.next) {
        prior = current;
//assign the next item in the list to current; moves one spot forward
        current = current.next;
      }
//when reach last item, assign the second to last item to .tail and make the next item after tail, null.
      prior.next = null;
      this.tail = prior;
    }
    return current.value;
  }

//remove and return head value; throw error if list is empty;
//list is empty if there is no head property;
  shift() {
    if (this.head === null) {
      throw new Error("List is empty.")
    } 
//if list contains only one item, decrease list by 1 to eliminate .head value;
    let current = this.head;
    if (this.head.next === null) {
      this.length -=1;
      this.head = null;
      this.tail = null;
      return current.val;
  //if list contains more than one item, assign head property to second item in list; return prior value of head property
    } else {
      this.head = this.head.next;
      this.length -= 1
      return current.val;
    }
  }
//retrieve value at position 'index'; throw error if invalid;
  getAt(index) {
    if (index > this.length || index < 0) {
      throw new Error("Index invalid")
    } else {
  //set up count variable to be 0; will increment each time through loop;
      let count = 0;
  //assign the .head value to current;
      let current = this.head; 
//as long as the count is less than the indexm assign the next item in list to 'current' and increment count by 1; when count is not less than index, will have reached the desired position;
      while(count < index) {
        current = current.next;
        count +=1;
      }
      return current.value
    }
  }
//set value of node at particular index position to a particular value; throw error if index is invalid; return undefined
  setAt(index, value) {
//if the index is greater than this.length, it is larger than the number of items in the list; if less than 0, then doesn't make sense;
    if (index > this.length || index < 0) {
      throw new Error("Index invalid")
    } else {
//just like the getAt method above;
      let count = 0;
      let current = this.head; 
//as long as the count does not equal the index, will continue to loop; for each loop will increment count by 1 and make current the next item in the list.
      while(count != index) {
        count +=1;
        current = current.next;
      }
//when the count is equal to the index, then reached the item position; change value of item with argument passed in for value;
      current.val = value;
    }
  }
//Insert a new node at position index with a particular value. Throw error if index is invalid. Return undefined.
  insertAt(index, value) {
    if (index > this.length || index < 0) {
      throw new Error('invalid index')
    } else {
//create instance of Node object pass parameter from above;
      let newNode = new Node(value)
//If the index is 0, then insert new node as the head
      if (index === 0) {
        this.head = newNode;
      }
//if this.length equals zero, then there are no items in the list; assign the newNode object to the head and tail
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
//If there are items in the list, go to the position specified in index
      } else {
        let count = 0;
        let current = this.head;
        while (count != index) {
          count +=1;
          current = current.next;
        }

//assign the next item in list to the attribute .next of newNode
        newNode.next = current.next;
//assign newNode object to the .next attribute of the current node in the list;
        current.next = newNode
      }
    }
  }

//Remove & return value at position index. Throw error if index is invalid.
    removeAt(index) {
      if (index > this.length || index < 0) {
        throw new Error("Index invalid")
      } else {
        let count = 0;
        let current = this.head;
        while (count < index) {
          current = current.next;
          count += 1
        }
        let removeNode = current.next;
        current.next = removeVal.next
        return removeNode.value;
      }
    }

  average() {
    if (this.length === 0) {
    return 0}

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
