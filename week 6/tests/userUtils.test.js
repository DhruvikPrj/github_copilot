import { getUserFullName, getDisplayName, isUserActive, getUserInitials, getRandomUser } from "../userUtils.js";

describe("userUtils", () => {
  test("full name and display name fallbacks", () => {
    expect(getUserFullName({ firstName: "A", lastName: "B" })).toBe("A B");
    expect(getDisplayName({ username: "nick" })).toBe("nick");
    expect(getDisplayName(null)).toBe("");
  });

  test("active and initials", () => {
    expect(isUserActive({ status: "active" })).toBe(true);
    expect(isUserActive({ isActive: true })).toBe(true);
    expect(getUserInitials({ firstName: "Ann", lastName: "Lee" })).toBe("AL");
    expect(getUserInitials({})).toBe("");
  });

  test("getRandomUser returns null for invalid", () => {
    expect(getRandomUser([])).toBeNull();
  });
});
