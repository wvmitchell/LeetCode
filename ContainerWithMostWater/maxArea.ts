export function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let height = Math.min(heights[left], heights[right]);
    let area = width * height;
    maxArea = Math.max(maxArea, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
