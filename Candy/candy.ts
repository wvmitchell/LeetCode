export function candy(ratings: number[]): number {
  let candies = new Array(ratings.length).fill(1)
  
  for(let i = 0; i < ratings.length; i++) {
    if(ratings[i] > ratings[i-1]) {
      candies[i] = candies[i-1] + 1
    }
  }

  for(let i = ratings.length - 1; i >= 0; i--) {
    if(ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
      candies[i] = candies[i+1] + 1
    }
  }

  return candies.reduce((sum, num) => sum + num, 0)
}
