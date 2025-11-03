import { buildPayload } from "../src/hooks/useWeather";

test("buildPayload extracts fields safely", () => {
  const res = {
    data: {
      main: { temp: 10, humidity: 55 },
      weather: [{ description: "rain" }],
    },
  };
  const p = buildPayload(res);
  expect(p).toEqual({ temp: 10, humidity: 55, description: "rain" });
});
