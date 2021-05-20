class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //Code here

    // let temp = this.tail;
    // this.tail = {
    //   value: value,
    //   next: null,
    // };
    // temp.next = {
    //   value: value,
    //   next: this.tail,
    // };

    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(18);

console.log(myLinkedList);
