export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function addTwoNumbers(head: ListNode | null, head2: ListNode | null): ListNode | null {
  let current1 = head
  let current2 = head2
  let result = new ListNode()
  let currentResult = result
  let carry = 0

  while(current1 || current2 || carry > 0) {
    let sum = (current1?.val || 0) + (current2?.val || 0) + carry
    currentResult.val = sum % 10
    carry = Math.floor(sum / 10)
    current1 = current1?.next || null
    current2 = current2?.next || null
    if(current1 || current2 || carry > 0) {
      currentResult.next = new ListNode()
      currentResult = currentResult.next
    }
  }

  return result
}
