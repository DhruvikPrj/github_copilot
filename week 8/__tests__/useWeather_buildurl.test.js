import { buildUrl } from "../src/hooks/useWeather";

test("buildUrl composes query with city", () => {
  const url = buildUrl("New York");
  expect(url).toMatch(/q=New%20York/);
  expect(url).toMatch(/units=metric/);
});
