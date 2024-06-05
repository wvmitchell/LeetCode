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
  let result = new ListNode(0)
  let currentResult = result

  while(currentResult) {
    let sum = (current1?.val || 0) + (current2?.val || 0) + (currentResult?.val || 0)
    currentResult.val = sum % 10
    let carry = Math.floor(sum / 10)

    if(current1?.next || current2?.next || carry > 0) {
      currentResult.next = new ListNode(carry)
    }

    current1 = current1?.next
    current2 = current2?.next
    currentResult = currentResult.next
  }

  console.log(result)

  return result
}
