class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  setData(data) {
    this.data = data;
  }

  setNext(next) {
    this.next = next;
  }
}

module.exports = Node;
