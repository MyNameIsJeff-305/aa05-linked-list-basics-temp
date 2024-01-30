class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0
  }

  addToHead(val) {
    let head = new LinkedListNode(val);
    if(this.length === 0) this.head = head;
    else {
      let temporaryHead = this.head;
      this.head = head;
      head.next = temporaryHead;
    }
    this.length++;
  }

  addToTail(val) {
    let head = new LinkedListNode(val);
    if(!this.head) this.head = head;
    else{
      let current = this.head
      while (current.next) {
        current = current.next;
      }
      current.next = head;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
