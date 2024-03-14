class ListNode {
  val?: number;
  next?: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function PalindromeLinkedList(head: ListNode | null): boolean {
  let temp = [];
  while (head) {
    temp.push(head.val);
    head = head.next || null;
  }

  let left = 0;
  let right = temp.length - 1;

  while (left <= right) {
    if (temp[left] !== temp[right]) return false;
    left++, right--;
  }

  return true;
}
