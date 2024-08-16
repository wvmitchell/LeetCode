function rob(houses: number[]): number {
  const dp: number[] = [houses[0]];
  for (var i = 1; i < houses.length; i++) {
    dp[i] = houses[i] + Math.max(dp[i - 3] || 0, dp[i - 2] || 0);
  }

  return Math.max(dp[houses.length - 1] || 0, dp[houses.length - 2] || 0);
}

export { rob };
