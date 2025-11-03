import { inc, dec } from '../src/utils/tiny';

test('tiny helpers', () => {
  expect(inc(1)).toBe(2);
  expect(dec(2)).toBe(1);
});
