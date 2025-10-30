import { info, warn, debug, error } from "../logUtils.js";
import { jest } from "@jest/globals";

describe("logUtils (side-effecting)", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "debug").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("info/warn/debug/error call console methods", () => {
    info("hello");
    warn("hey");
    debug({ a: 1 });
    error(new Error("bad"));
    expect(console.log).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.debug).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });
});
