const Node = require('./Node');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let node = this.head;
    let size = 0
    while(node) {
      size ++;
      node = node.next;
    }
    return size;
  }

  insert(data) {
    const node = new Node(data);
    let current = null;
    if (!this.head) {
      this.head = node
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertAt(data, index) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node
    } else {
      const prev = this.getAt(index - 1);
      node.next = prev.next;
      prev.next = node;
    }
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while(lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  getAt(index) {
    let counter = 0;
    let current = this.head;
    if (this.size() <= 1) return this.head;
    while(counter < index) {
      counter++;
      current = current.next;
    }
    return current;
  }
}

module.exports = LinkedList;
