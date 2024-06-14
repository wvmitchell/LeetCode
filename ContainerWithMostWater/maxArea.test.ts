import { maxArea } from "./maxArea";

describe("maxArea", () => {
  it("should return 1 for array [1, 1]", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("should return 49 for array [1, 8, 6, 2, 5, 4, 8, 3, 7]", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("should return 0 for array [0, 0, 10]", () => {
    expect(maxArea([0, 0, 10])).toBe(0);
  });
});
