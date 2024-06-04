import { ListNode, hasCycle } from './cycle';

describe('linked list cycle', () => {
  it('should return false for an empty linked list', () => {
    expect(hasCycle(null)).toBe(false);
  })

  it('should return false for a one element linked list', () => {
    const head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
  })

  it('should return false if there is no cycle in a 2 node linked list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    expect(hasCycle(head)).toBe(false);
  })

  it('should return true if there is a cycle in a 2 node linked list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = head;
    expect(hasCycle(head)).toBe(true);
  })

  it('should return false if there is no cycle in a 3 node linked list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    expect(hasCycle(head)).toBe(false);
  })

  it('should return true if there is a cycle in a 3 node linked list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head.next;
    expect(hasCycle(head)).toBe(true);
  })
})
