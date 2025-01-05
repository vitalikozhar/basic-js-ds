const { NotImplementedError, ListNode } = require("../extensions/index.js");

  // const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newListNode = new ListNode(value);
    if (this.tail === null) {
      this.tail = newListNode;
      this.head = newListNode;
    } else {
      this.tail.next = newListNode;
      this.tail = newListNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      this.tail = null;
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    return value;
  }
}

module.exports = {
  Queue,
};
