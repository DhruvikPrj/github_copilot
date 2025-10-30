import { formatDate, formatDateTime, formatShortDate, getCurrentDate, getDayName, getMonthName } from "../dateUtils.js";

describe("dateUtils", () => {
  test("formatDate produces YYYY-MM-DD", () => {
    expect(formatDate("2020-01-02T03:04:05Z")).toBe("2020-01-02");
  });

  test("formatDateTime produces date and time", () => {
    const out = formatDateTime(new Date("2020-01-02T03:04:05Z"));
    expect(out.startsWith("2020-01-02")).toBe(true);
  });

  test("getDayName and getMonthName edge cases", () => {
    expect(getDayName("2020-01-05")).toBe("Sunday");
    expect(getMonthName(0)).toBe("January");
    expect(getMonthName(99)).toBe("");
  });

  test("invalid inputs return empty strings and current date pattern", () => {
    expect(formatDate(null)).toBe("");
    expect(formatDateTime("not-a-date")).toBe("");
    expect(formatShortDate("2020-12-31")).toBe("31/12/20");
    expect(getDayName("invalid-date")).toBe("");
    // getCurrentDate should be in YYYY-MM-DD format
    expect(getCurrentDate()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test("date inputs as Date and timestamp", () => {
    const d = new Date('2021-02-03T04:05:06Z');
    expect(formatDate(d)).toBe('2021-02-03');
    expect(formatDateTime(d).startsWith('2021-02-03')).toBe(true);
    expect(formatDate(1612313106000)).toBe('2021-02-03');
  });

  test("formatDateTime full pattern and formatShortDate variants", () => {
    const d = new Date('2022-03-04T05:06:07Z');
    const out = formatDateTime(d);
    // Ensure pattern includes full date and time "YYYY-MM-DD HH:MM:SS"
    expect(out).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    expect(formatShortDate(new Date('1999-12-31'))).toMatch(/^\d{2}\/\d{2}\/\d{2}$/);
  });
});
