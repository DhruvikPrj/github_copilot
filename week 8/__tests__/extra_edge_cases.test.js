import { buildPayload } from "../src/hooks/useWeather";
import { maxOf, minOf } from "../src/utils/coverage_boost";

test("buildPayload handles missing weather array gracefully", () => {
  const res = {
    data: {
      main: { temp: 5, humidity: 10 },
      // weather missing
    },
  };
  const p = buildPayload(res);
  expect(p).toEqual({ temp: 5, humidity: 10, description: undefined });
});

test("maxOf and minOf return null for empty or null arrays", () => {
  expect(maxOf([])).toBeNull();
  expect(minOf([])).toBeNull();
  expect(maxOf(null)).toBeNull();
  expect(minOf(null)).toBeNull();
});
