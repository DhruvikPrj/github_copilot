import { sum, average, percentage, randomInt, randomString } from "../mathUtils.js";
import { jest } from "@jest/globals";

describe("mathUtils", () => {
  test("sum and average", () => {
    expect(sum(2, 3)).toBe(5);
    expect(average([2, 4, 6])).toBe(4);
    expect(average([])).toBe(0);
  });

  test("percentage and precision", () => {
    expect(percentage(1, 4)).toBe(25.0);
    expect(percentage(1, 3)).toBe(33.33);
    expect(percentage(1, 0)).toBe(0);
  });

  test("randomInt and randomString deterministic by mocking", () => {
    const spy = jest.spyOn(Math, "random").mockReturnValue(0.5);
    expect(randomInt(1, 3)).toBe(2);
    expect(randomString(5)).toHaveLength(5);
    spy.mockRestore();
  });
});
