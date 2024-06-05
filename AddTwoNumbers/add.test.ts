import { addTwoNumbers, ListNode } from './add';

describe('addTwoNumbers', () => {
  it('should return list with zero for two lists where both have one element where the value is 0', () => {
    expect(listsAreEqual(addTwoNumbers(new ListNode(0), new ListNode(0)), new ListNode(0))).toBe(true);
  })

  it('should return 2 for two lists where both have one element where the value is 1', () => {
    expect(listsAreEqual(addTwoNumbers(new ListNode(1), new ListNode(1)), new ListNode(2))).toBe(true);
  })

  it('should return 708 for two, three element lists where the values are 2, 4, 3 and 5, 6, 4', () => {
    const head = new ListNode(2, new ListNode(4, new ListNode(3)));
    const head2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    expect(listsAreEqual(addTwoNumbers(head, head2), new ListNode(7, new ListNode(0, new ListNode(8))))).toBe(true);
  })

  it('correctly handles carry over for all 9s', () => {
    const head = new ListNode(9, new ListNode(9, new ListNode(9)));
    const head2 = new ListNode(9, new ListNode(9));
    expect(listsAreEqual(addTwoNumbers(head, head2), new ListNode(8, new ListNode(9, new ListNode(0, new ListNode(1)))))).toBe(true);
  })

  it('should return 20 for two, two element lists where the values are 1 and 0 in each list', () => {
    const head = new ListNode(0, new ListNode(1));
    const head2 = new ListNode(0, new ListNode(1));
    expect(listsAreEqual(addTwoNumbers(head, head2), new ListNode(0, new ListNode(2)))).toBe(true);
  })
})

function listsAreEqual(list1: ListNode | null, list2: ListNode | null): boolean {
  let current1 = list1;
  let current2 = list2;

  while(current1 && current2) {
    if(current1.val !== current2.val) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return true;
}
