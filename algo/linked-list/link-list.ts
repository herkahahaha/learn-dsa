class Node {
  constructor(public data: number, public next: Node | null = null) {}
}

class LinkList {
  head: Node | null = null;

  // add value in last of the list
  append(data: number) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      // console.log("head ", this.head);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      // console.log("current ", current);
    }
  }

  // print the values of linked list
  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data;
      console.log(current.data);
      current = current.next;
    }
    return str;
  }

  // delete
  delete(value: number): void {
    if (!this.head) {
      return; // Senarai kosong
    }

    // Jika simpul pertama memiliki nilai yang sesuai
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev: Node | null = null;

    // Cari simpul dengan nilai yang sesuai
    // while (current && current?.data !== value) {
    //   prev = current;
    //   current = current?.next as never;
    // }

    // Jika ditemukan, ubah tautan
    // if (current) {
    //   prev!.next = current.next;
    // }

    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Add value in middle
  insertAfter(existingNode: Node, data: number) {
    if (!existingNode) {
      return;
    } // not valid
    const newNode = new Node(data);
    newNode.next = existingNode.next;
    existingNode.next = newNode;
  }
}

const myLinkList = new LinkList();
export default myLinkList;
