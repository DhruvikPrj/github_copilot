import { capitalizeFirstLetter, capitalizeAllWords, truncateText, isValidEmail, slugify } from "../stringUtils.js";

describe("stringUtils", () => {
  test("capitalizeFirstLetter and words", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeAllWords("hello world")).toBe("Hello World");
  });

  test("truncateText edge cases", () => {
    expect(truncateText("short", 10)).toBe("short");
    expect(truncateText("this is a long text", 4)).toBe("this...");
  });

  test("email and slug validation", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("bad@.com")).toBe(false);
    expect(slugify("Hello World! 2020")).toBe("hello-world-2020");
  });

  test("edge cases: empty and multiple spaces", () => {
    expect(capitalizeAllWords("")).toBe("");
    expect(capitalizeAllWords("  multiple   spaces ")).toBe("Multiple Spaces");
    expect(slugify("  Trim THIS!! ")).toBe("trim-this");
    expect(isValidEmail(null)).toBe(false);
  });

  test("truncate behavior for exact length and types", () => {
    expect(truncateText("hello", 5)).toBe("hello");
    expect(truncateText("hello world", 5)).toBe("hello...");
    expect(capitalizeFirstLetter(123)).toBe("123");
  });
});
