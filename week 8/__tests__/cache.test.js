/**
 * cache.test.js
 * Unit tests for the cache utility ensuring TTL behavior and fallback.
 */
import { setCache, getCache } from "../src/utils/cache";

describe("cache utility", () => {
  beforeEach(() => {
    try {
      window.localStorage.clear();
    } catch (e) {
      /* ignore */
    }
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("sets and gets value before expiry", () => {
    setCache("k1", { a: 1 }, 1000);
    const val = getCache("k1");
    expect(val).toEqual({ a: 1 });
  });

  test("returns null after expiry", () => {
    setCache("k2", "x", 1000);
    jest.advanceTimersByTime(1001);
    const val = getCache("k2");
    expect(val).toBeNull();
  });

  test("expired localStorage entry is removed and returns null", () => {
    const key = "expired_local";
    const payload = { value: { a: 1 }, expiresAt: Date.now() - 1000 };
    window.localStorage.setItem(key, JSON.stringify(payload));
    const val = getCache(key);
    expect(val).toBeNull();
    expect(window.localStorage.getItem(key)).toBeNull();
  });
});
