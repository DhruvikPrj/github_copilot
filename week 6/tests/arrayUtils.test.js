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

  test("flatten non-array and chunk edge cases and merge behavior", () => {
    expect(flatten(null)).toEqual([]);
    expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    expect(chunk([1,2,3], 0)).toEqual([]);
    expect(merge([2,1], [1,3], false)).toEqual([2,1,1,3]);
    expect(merge([2,1], [1,3], true)).toEqual([2,1,3]);
    expect(intersection(null, [1,2])).toEqual([]);
  });

  test("chunk and flatten variations", () => {
    expect(chunk([1,2,3], 1)).toEqual([[1],[2],[3]]);
    expect(chunk([1,2], 5)).toEqual([[1,2]]);
    expect(flatten([[], [1], []])).toEqual([1]);
    expect(unique(["a","a","b"]).sort()).toEqual(["a","b"].sort());
  });
});
