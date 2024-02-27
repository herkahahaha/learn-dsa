/*
  First in Last Out
*/
class Stuck {
  items: number[] | string[];
  constructor() {
    this.items = [];
  }

  add(value: never) {
    this.items?.push(value);
    console.log("items stack", this.items);
  }

  print() {
    return this.items[this.items.length - 1];
  }

  put() {
    if (this.items.length == 0) return "empty";
    return this.items.pop();
  }
}

const newStuck = new Stuck();
export default newStuck;
