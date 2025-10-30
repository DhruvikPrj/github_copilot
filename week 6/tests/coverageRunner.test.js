import * as dateUtils from "../dateUtils.js";
import * as stringUtils from "../stringUtils.js";
import * as arrayUtils from "../arrayUtils.js";
import * as userUtils from "../userUtils.js";
import * as mathUtils from "../mathUtils.js";

describe("coverage runner - exercise more branches", () => {
  test("date utils variations don't throw and return expected types", () => {
    expect(typeof dateUtils.formatDate(new Date())).toBe("string");
    expect(dateUtils.formatDate('invalid')).toBe("");
    expect(typeof dateUtils.formatDateTime(new Date())).toBe("string");
    expect(typeof dateUtils.formatShortDate(new Date())).toBe("string");
    expect(dateUtils.getDayName('invalid')).toBe("");
    expect(dateUtils.getMonthName(-1)).toBe("");
  });

  test("string utils variations", () => {
    expect(stringUtils.capitalizeFirstLetter(0)).toBe("0");
    expect(stringUtils.capitalizeAllWords(" a b ")).toBe("A B");
    expect(stringUtils.truncateText(null)).toBe("");
    expect(stringUtils.isValidEmail('UPPER@EX.COM')).toBe(true);
    expect(stringUtils.slugify('___a__ b--c')).toBe("a-b-c");
  });

  test("array utils variations", () => {
    expect(arrayUtils.flatten([[], [1]])).toEqual([1]);
    expect(arrayUtils.chunk([1,2,3,4,5], 2).length).toBeGreaterThan(0);
    expect(arrayUtils.unique([1,1,2]).includes(2)).toBe(true);
    expect(arrayUtils.merge([], [], true)).toEqual([]);
    expect(arrayUtils.intersection([1], [2])).toEqual([]);
  });

  test("user and math utils quick calls", () => {
    expect(userUtils.getUserFullName({})).toBe("");
    expect(userUtils.getUserInitials({ firstName: 'A' })).toBe('A');
    expect(typeof mathUtils.percentage(5, 10)).toBe('number');
  });
});
