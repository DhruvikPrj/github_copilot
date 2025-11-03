import * as B from "../src/utils/branch_boost";

test("branch boost functions - truthy/falsey and branches", () => {
  expect(B.isTruthy(1)).toBe(true);
  expect(B.isTruthy(0)).toBe(false);

  expect(B.ifElseNumber(3)).toBe("pos");
  expect(B.ifElseNumber(0)).toBe("non-pos");

  expect(B.safeDivide(6, 2)).toBe(3);
  expect(B.safeDivide(1, 0)).toBeNull();

  expect(B.hasItems([1])).toBe(true);
  expect(B.hasItems([])).toBe(false);

  expect(B.pickFirst([9, 8])).toBe(9);
  expect(B.pickFirst([])).toBeNull();

  expect(B.toggleFlag(true)).toBe(false);
  expect(B.toggleFlag(false)).toBe(true);

  expect(B.greetName("joe")).toBe("hi joe");
  expect(B.greetName("")).toBe("hi");

  expect(B.sign(0)).toBe(0);
  expect(B.sign(5)).toBe(1);
  expect(B.sign(-2)).toBe(-1);

  expect(B.within(5, 1, 10)).toBe(true);
  expect(B.within(0, 1, 10)).toBe(false);

  expect(B.fallback(null, "x")).toBe("x");
  expect(B.fallback(2, "x")).toBe(2);

  expect(B.evenOdd(2)).toBe("even");
  expect(B.evenOdd(3)).toBe("odd");

  expect(B.maxOrDefault([1, 5, 3], 0)).toBe(5);
  expect(B.maxOrDefault([], 0)).toBe(0);

  expect(B.minOrDefault([1, 5, 3], 0)).toBe(1);
  expect(B.minOrDefault([], 0)).toBe(0);

  expect(B.includesValue([1, 2, 3], 2)).toBe(true);
  expect(B.includesValue(null, 2)).toBe(false);

  expect(B.describeAge(10)).toBe("child");
  expect(B.describeAge(15)).toBe("teen");
  expect(B.describeAge(30)).toBe("adult");

  expect(B.firstNonNull(null, 5)).toBe(5);
  expect(B.firstNonNull(1, 5)).toBe(1);

  expect(B.ensureArray(3)).toEqual([3]);
  expect(B.ensureArray([3])).toEqual([3]);

  expect(B.strOrEmpty(null)).toBe("");
  expect(B.strOrEmpty("x")).toBe("x");

  expect(B.mapOrDefault([1, 2], (n) => n + 1)).toEqual([2, 3]);
  expect(B.mapOrDefault(null, (n) => n)).toEqual([]);

  expect(B.bothTrue(true, true)).toBe(true);
  expect(B.bothTrue(true, false)).toBe(false);
});
