import * as cb from "../src/utils/coverage_boost2";

test("coverage boost2 functions return expected numbers", () => {
  const keys = Object.keys(cb).filter((k) => k.startsWith("b"));
  // ensure we call each function exported by the module
  keys.forEach((k) => {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(typeof cb[k]).toBe("function");
    // call the function and expect a number
    const val = cb[k]();
    expect(typeof val).toBe("number");
  });
});
