export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while(fast?.next) {
    slow = slow.next
    fast = fast.next.next
    if(slow === fast) return true
  }

  return false
}

/*
export function hasCycle(head: ListNode | null): boolean {
  let seen = []
  let current = head

  while(current?.next) {
    if(seen.includes(current)) {
      return true
    } else {
      seen.push(current)
      current = current.next
    }
  }

  return false
}
*/
