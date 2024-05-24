export function candy(ratings: number[]): number {
  // Strategy:
  // 1. Create an array of the same length as ratings, initialized with 1. Since each child must have at least one candy.
  // 2. Traverse the ratings array from left to right, and if the current rating is greater than the previous rating, increment the candy count for the current child.
  // 3. Traverse the ratings array from right to left, and if the current rating is greater than the next rating, increment the candy count for the current child.
  // 4. Return the sum of the candy array.

  let candies = new Array(ratings.length).fill(1)
  
  for(let i = 0; i < ratings.length; i++) {
    if(ratings[i] > ratings[i-1]) {
      candies[i] = candies[i-1] + 1
    }
  }

  for(let i = ratings.length - 1; i >= 0; i--) {
    console.log('index: ', i)
    if(ratings[i] > ratings[i+1]) {
      candies[i] = candies[i+1] + 1
    }
  }

  return candies.reduce((sum, num) => sum + num, 0)
}
