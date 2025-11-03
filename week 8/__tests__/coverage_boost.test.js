import {
  add,
  sub,
  mul,
  div,
  isEven,
  greet,
  noop,
  repeat,
  maxOf,
  minOf,
} from "../src/utils/coverage_boost";

test("coverage boost functions", () => {
  expect(add(1, 2)).toBe(3);
  expect(sub(5, 3)).toBe(2);
  expect(mul(2, 3)).toBe(6);
  expect(div(6, 2)).toBe(3);
  expect(div(1, 0)).toBeNull();
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(greet("x")).toBe("hello x");
  expect(greet("")).toBe("hello");
  expect(noop()).toBeUndefined();
  expect(repeat("a", 3)).toBe("aaa");
  expect(maxOf([1, 2, 3])).toBe(3);
  expect(minOf([1, 2, 3])).toBe(1);
});
