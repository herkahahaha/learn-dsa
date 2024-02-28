/*
  First in First Out
*/

class Queue {
  items: number[] | string[];
  constructor() {
    this.items = [];
  }

  // enque
  add(value: never) {
    this.items?.push(value);
    console.log("items queue", this.items);
  }

  // deque
  print() {
    return this.items[0];
  }

  // front
  put() {
    if (this.items.length == 0) return "empty";
    return this.items.shift();
  }
}

const newQueue = new Queue();
export default newQueue;
