/**
 * Additional cache tests to hit fallback and error paths.
 */
import { setCache, getCache } from "../src/utils/cache";

describe("cache extra paths", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    try {
      window.localStorage.clear();
    } catch (e) {
      /* ignore */
    }
  });

  afterEach(() => {
    jest.useRealTimers();
    // restore localStorage if replaced
    if (!window.localStorage) {
      /* eslint-disable-next-line no-undef */
      window.localStorage = global.localStorage;
    }
  });

  test("memory fallback when localStorage is not available", () => {
    // simulate missing localStorage by loading the module after removing it
    const orig = window.localStorage;
    // remove localStorage then reset module cache so isLocalStorageAvailable is recomputed
    // @ts-ignore
    delete window.localStorage;
    jest.resetModules();
    // eslint-disable-next-line global-require
    const { setCache: sc, getCache: gc } = require("../src/utils/cache");
    sc("m1", { x: 2 }, 1000);
    const v = gc("m1");
    expect(v).toEqual({ x: 2 });
    // restore
    // @ts-ignore
    window.localStorage = orig;
    jest.resetModules();
  });

  test("invalid JSON in localStorage is handled and removed", () => {
    window.localStorage.setItem("bad", "not-json");
    const val = getCache("bad");
    expect(val).toBeNull();
    expect(window.localStorage.getItem("bad")).toBeNull();
  });
});
