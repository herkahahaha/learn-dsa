class Node {
  constructor(public val: number, public next: Node | null = null) {
    // this.val = val === undefined ? 0 : val;
    // this.next = next === undefined ? null : next;
  }
}

class LinkList {
  head: Node | null = null;

  // length
  getLength() {
    let len = 0;
    let curr = this.head;
    while (curr !== null) {
      curr = curr.next;
      len++;
    }
    return len;
  }

  // Get
  get(index: number): number {
    if (index < 0 || index >= this.getLength()) return -1;
    let curr: Node | any = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr?.val as number;
  }

  // Add to Head
  addToHead(val: number): void {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  // add value after head
  addAfterHead(existingNode: Node, val: number): void {
    if (!existingNode) return;
    const node = new Node(val);
    node.next = existingNode.next;
    existingNode.next = node;
  }

  // add to tail
  addToTail(val: number): void {
    if (this.head === null) {
      this.addToHead(val);
      return;
    }

    let node = new Node(val);
    let curr = this.head;
    while (curr?.next !== null) {
      curr = curr?.next;
    }
    curr.next = node;
  }

  // Add to Index
  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addToHead(val);
    }
    if (index === this.getLength()) {
      this.addToTail(val);
      return;
    }
    if (index > this.getLength()) return;
    let node = new Node(val);
    let curr: Node | any = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr?.next;
    }
    let next = curr?.next;
    curr.next = node;
    node.next = next;
  }

  // delete at index
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.getLength()) return;
    if (index === 0) {
      this.head = this.head?.next as Node;
      return;
    }
    let curr: Node | any = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr?.next;
    }
    curr.next = curr.next.next;
  }

  // delete by value
  delete(val: number): void {
    if (!this.head) return;
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    while (curr?.next) {
      // curr.next.val === val
      if (curr?.next.val === val) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  print(): string {
    let currents = this.head;
    let str = "";
    while (currents) {
      str += currents.val;
      console.log(currents.val);
      currents = currents.next;
    }
    return str;
  }
}

const myLinkList = new LinkList();
export default myLinkList;
