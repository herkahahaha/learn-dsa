/*
  First in First Out
*/

class Queue {
  items: number[] | string[];
  constructor() {
    this.items = [];
  }

  add(value: never) {
    this.items?.push(value);
    console.log("items queue", this.items);
  }

  print() {
    return this.items[0];
  }

  put() {
    if (this.items.length == 0) return "empty";
    return this.items.shift();
  }
}

const newQueue = new Queue();
export default newQueue;
