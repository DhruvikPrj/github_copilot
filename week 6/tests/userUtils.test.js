import { getUserFullName, getDisplayName, isUserActive, getUserInitials, getRandomUser } from "../userUtils.js";
import { jest } from "@jest/globals";

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

  test("getRandomUser returns null for invalid and deterministic for non-empty", () => {
    expect(getRandomUser([])).toBeNull();
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const spy = jest.spyOn(Math, "random").mockReturnValue(0.1);
    expect(getRandomUser(users)).toBe(users[0]);
    spy.mockRestore();
  });

  test("name fallbacks and initials edge cases", () => {
    expect(getUserFullName({ firstName: 'Only' })).toBe('Only');
    expect(getUserFullName({ lastName: 'Surname' })).toBe('Surname');
    expect(getDisplayName({ email: 'e@x.com' })).toBe('e@x.com');
    expect(isUserActive(null)).toBe(false);
    expect(getUserInitials({ firstName: 'Solo' })).toBe('S');
  });

  test("getUserFullName null and initials with only last name", () => {
    expect(getUserFullName(null)).toBe("");
    expect(getUserInitials({ lastName: 'Bond' })).toBe('B');
    expect(isUserActive({ status: 'inactive' })).toBe(false);
  });
});
