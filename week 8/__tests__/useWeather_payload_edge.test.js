import { buildPayload } from "../src/hooks/useWeather";

test("buildPayload handles missing weather array", () => {
  const res = { data: { main: { temp: 5, humidity: 10 }, weather: undefined } };
  const p = buildPayload(res);
  expect(p).toEqual({ temp: 5, humidity: 10, description: undefined });
});
