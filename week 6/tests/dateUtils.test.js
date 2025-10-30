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
});
