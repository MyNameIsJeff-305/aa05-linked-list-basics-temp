class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } 
    else {
      let tempHead = this.head;
      tempHead.prev = newNode;
      this.head = newNode;
      this.head.next = tempHead;
    }
    this.length++;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedListNode(val);
    if(!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } 
    else {
      let current = this.tail;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
      this.tail = newNode;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
