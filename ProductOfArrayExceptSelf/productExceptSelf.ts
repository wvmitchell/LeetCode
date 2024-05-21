export function xproductExceptSelf(nums: number[]): number[] {
  let state: { [key: number]: { [key: string]: number } } = {}
  let left = 0
  let right = nums.length - 1
  let productLeft = 1
  let productRight = 1

  while((left <= nums.length - 1) && (right >= 0)) {
    state[left] = {...state[left], productLeft}
    state[right] = {...state[right], productRight}
    productLeft *= nums[left]
    productRight *= nums[right]
    left++
    right--
  }

  return Object.values(state).map(products => {
    let total = products.productLeft * products.productRight
    return total == 0 ? Math.abs(total) : total
  })
}

// Solve the problem in a different way:
export function productExceptSelf(nums: number[]): number[] {
  let result = new Array(nums.length).fill(1)
  let product = 1

  for(let i = 0; i < nums.length; i++) {
    result[i] *= product
    product *= nums[i]
  }

  product = 1
  for(let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product
    product *= nums[i]
  }

  return result.map((num, i) => num == 0 ? Math.abs(num) : num)
}
