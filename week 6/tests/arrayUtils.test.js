import { flatten, chunk, unique, merge, intersection } from "../arrayUtils.js";

describe("arrayUtils", () => {
  test("flatten and chunk", () => {
    expect(flatten([[1, 2], [3]])).toEqual([1, 2, 3]);
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([], 2)).toEqual([]);
  });

  test("unique and merge", () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(merge([1], [2, 1], true)).toEqual([1, 2]);
  });

  test("intersection", () => {
    expect(intersection([1, 2, 3], [2, 4])).toEqual([2]);
  });
});
